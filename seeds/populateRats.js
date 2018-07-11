
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('rats').del()
    .then(function () {
      // Inserts seed entries
      return knex('rats').insert([
        {id: 1, name: 'Percy', colour: 'White', is_hoodrat: false},
        {id: 2, name: 'Atlas', colour: 'Brown', is_hoodrat: false},
        {id: 3, name: 'Meli', colour: 'Gold', is_hoodrat: true},
        {id: 4, name: 'Tiko', colour: 'Grey', is_hoodrat: true}
      ]);
    });
};
