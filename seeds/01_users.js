
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE users CASCADE; ALTER SEQUENCE users_id_seq restart with 6')
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, first_name: 'Carter', last_name:'Hunter', email:'cchxp@virginia.edu'},
        {id: 2, first_name: 'Caroline', last_name:'Odonnell', email:'caroline.odonnell26@gmail.com'},
        {id: 3, first_name: 'Todd', last_name:'Bracken', email:'charles.todd.bracken@gmail.com'},
        {id: 4, first_name: 'Emily', last_name:'Moore', email:'moorejet7891@gmail.com'},
        {id: 5, first_name: 'Taylor', last_name:'Thomas', email:'ktt1234@gmail.com'}
      ]);
    });
};
