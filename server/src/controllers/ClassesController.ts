import {Request, Response} from 'express'
import db from '../database/connection';
import AppError from '../errors/AppError';
import convertHourToMinutes from '../utills/convertHourToMinutes';

interface ScheduleItem {
  week_day: number,
  from: string,
  to: string
}


export default class ClassesController {
  async index(req: Request, res: Response) {
    const filters = req.query;

    const subject = filters.subject as string;
    const week_day = filters.week_day as string;
    const time = filters.time as string;

    if (!filters.week_day || !filters.subject || !filters.time) {
      throw new AppError('Missing filters to search classes', 400);

    }

    const timeInMinutes = convertHourToMinutes(time);

    const classes = await db('classes')
      .whereExists(function() { // expoe a sub query no this
        this.select('class_schedule.*')
          .from("class_schedule")
          .whereRaw('`class_schedule`.`class_id` = `classes`.`id`')
          .whereRaw('`class_schedule`.`week_day` = ??', [Number(week_day)])
          .whereRaw('`class_schedule`.`from` <= ??' , [timeInMinutes])
          .whereRaw('`class_schedule`.`to` > ??' , [timeInMinutes])

     })
      .where('classes.subject', '=', subject)
      .join('users', 'classes.user_id', '=', 'users.id')
      .select(['classes.*', 'users.name'])
      .join('user_info', 'classes.user_id', '=', 'user_info.user_id')
      .select(['classes.*', 'user_info.*'])


    return res.json(classes);
  }


  async create(req: Request, res: Response) {
    const {
      avatar,
      whatsapp,
      bio,
      subject,
      cost,
      schedule
    } = req.body;

    const { id: user_id } = req.user;

    const trx = await db.transaction();

    try {
      const insertedUsersIds = await trx('user_info').insert({
        avatar,
        whatsapp,
        bio,
        user_id,
      })

      const insertedClassesIds = await trx('classes').insert({
        subject,
        cost,
        user_id,
      })

      const class_id = insertedClassesIds[0];

      //lembrar que o schedule é um array

      const classSchedule = schedule.map((item: ScheduleItem) => {
        return {
          class_id,
          week_day: item.week_day,
          from: convertHourToMinutes(item.from),
          to: convertHourToMinutes(item.to)
        }
      })

      await trx('class_schedule').insert(classSchedule);

      await trx.commit(); // realiza a operação

      return res.status(201).send();

    } catch (err) {
        trx.rollback();

        throw new AppError('Unexpected error while creating new class', 400);
    }
  }
}