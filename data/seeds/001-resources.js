
exports.seed = function(knex) {
  
      return knex('resources').insert([
        {name: 'Beginner\'s guide to paleo', project_id: 3},
        {name: 'Guide to wasing your car like a pro', project_id: 2},
        {name: 'Tidying up with marie kondo', project_id: 1}
      ]);
    
};
