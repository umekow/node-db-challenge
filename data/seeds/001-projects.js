
exports.seed = function(knex) {
  // Deletes ALL existing entries
  
      return knex('projects').insert([
        {name: 'Clean Home', description: "Spring Cleaning", completed: true},
        {name: 'Wash Car', description: "make sure to clean muddy windows", completed: false},
        {name: 'Groceries', description: "Starting paleo diet", completed: false}
      ]);
    
};
