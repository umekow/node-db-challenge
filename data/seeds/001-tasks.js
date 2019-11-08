
exports.seed = function(knex) {
  return knex('tasks').truncate()
  .then(function () {
    // add data into insert
    return knex('tasks').insert([
      {description: 'Buy Groceries', notes: 'Dont forget the suger!'},
      {description: 'Go on date with jim', notes: 'Make sure to lock doors' },
    ]);
  });
};
