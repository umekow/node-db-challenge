
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // add data into insert
      return knex('resources').insert([
        { name: 'Grocery List', description: 'checklist on phone'},
        { name: 'pizza', description: 'checklist on phone'},

      ]);
    });
};
