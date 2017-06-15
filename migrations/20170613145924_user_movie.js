
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('user_movie', function(table){
    table.increments('id').primary();
    table.integer('user_id').unsigned();
    table.integer('movie_id').unsigned();
    table.foreign('user_id').references('users.id');
    table.foreign('movie_id').references('movie.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('user_movie');
};
