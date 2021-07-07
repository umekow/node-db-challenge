
exports.seed = function(knex) {

      return knex('tasks').insert([
        {description: 'Buy Steak', notes: 'Buy Organic', project_id: 3},
        {description: 'Buy a new mop', notes: 'get mop', project_id: 1},
        {description: 'Fill a bucket with water and cleaning solution', notes: 'double check the label', project_id: 2}
      ]);
    
};
