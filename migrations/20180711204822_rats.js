
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('rats', table => {
      table.increments('id')
      table.string('name')
      table.string('colour')
      table.boolean('is_hoodrat')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('rats')
};
