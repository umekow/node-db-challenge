
exports.seed = function(knex) {
  return knex('projects_resources').truncate()
    .then(function () {
      // add data into insert
      return knex('projects_resources').insert([
        { name: 'Stephenson', budget: 10000 },
        { name: 'Gordon & Gale', budget: 40400 },
      ]);
    });
};


