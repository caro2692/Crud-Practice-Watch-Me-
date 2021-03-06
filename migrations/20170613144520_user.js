
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('users', function(table){
    table.increments('id').primary();
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.string('email').notNullable();
    table.unique('email');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('users');
};
