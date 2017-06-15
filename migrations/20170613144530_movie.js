
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('movie', function(table){
    table.increments('id').primary();
    table.string('title').notNullable();
    table.integer('guidebox_id').notNullable();
    table.unique('guidebox_id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('movie');
};
