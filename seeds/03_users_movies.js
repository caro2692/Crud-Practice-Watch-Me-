
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE user_movie RESTART IDENTITY CASCADE;')
    .then(function () {
      // Inserts seed entries
      return knex('user_movie').insert([
        {user_id: 1, movie_id:1},
        {user_id: 1, movie_id:2},
        {user_id: 1, movie_id:3},
        {user_id: 2, movie_id:2},
        {user_id: 2, movie_id:3},
        {user_id: 3, movie_id:3},
        {user_id: 4, movie_id:1},
        {user_id: 4, movie_id:2},
        {user_id: 5, movie_id:1},
        {user_id: 5, movie_id:2},
        {user_id: 5, movie_id:3}
      ]);
    });
};
