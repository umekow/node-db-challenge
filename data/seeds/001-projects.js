
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // add data into insert
      return knex('projects').insert([
        { name: 'Stephenson', budget: 10000 },
        { name: 'Gordon & Gale', budget: 40400 },
      ]);
    });
};
