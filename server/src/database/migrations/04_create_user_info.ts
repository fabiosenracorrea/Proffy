import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('user_info', table => {
    table.string('avatar').notNullable();
    table.string('whatsapp').notNullable();
    table.string('bio').notNullable();

    table.integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  });
}


export async function down(knex: Knex) {
  return knex.schema.dropTable('user_info');
}