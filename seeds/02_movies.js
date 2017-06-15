
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE movie CASCADE; ALTER SEQUENCE movie_id_seq restart with 4')
    .then(function () {
      // Inserts seed entries
      return knex('movie').insert([
        {id: 1, title: 'Friends with Benefits', guidebox_id: 23452345},
        {id: 2, title: 'The Notebook', guidebox_id: 23452346},
        {id: 3, title: 'Concussion', guidebox_id: 23452347}
      ]);
    });
};
