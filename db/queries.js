const knex = require('./knex');

module.exports = {
  getAllMovies(){
    return knex('movie');
  },
  createMovie(movie){
    return knex('movie').insert(movie,'*');
  }
};
