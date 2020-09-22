import {Request, Response} from 'express'
import db from '../database/connection';
import { hash, compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import authConfig from '../config/auth';
import AppError from '../errors/AppError';

export default class UsersController {
  async login(req: Request, res: Response) {
    const { email, password } = req.body;

    const [user] = await (
      db('users')
      .whereExists(function() {
        this.select('users.*')
          .from('users')
          .where('users.email', '=', email)
      })
    );

    if (!user) {
      throw new AppError('Incorrect email/password combination', 403);
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError('Incorrect email/password combination', 403);
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: String(user.id),
      expiresIn,
    });

    return res.status(201).json({
      user_id: user.id,
      user_email: user.email,
      token,
    })
  }


  async create(req: Request, res: Response) {
    const {
      name,
      email,
      password,
    } = req.body;

    const trx = await db.transaction();

    try {
      const hashedPassword = await hash(password, 8);

      const insertedUsersIds = await trx('users').insert({
        name,
        email,
        password: hashedPassword,
      })

      await trx.commit(); // realiza a operação

      return res.status(201).json({
        message: 'User created successfully'
      });

    } catch (err) {
        trx.rollback();

        throw new AppError('Unexpected error while creating new user', 400);
    }
  }
}