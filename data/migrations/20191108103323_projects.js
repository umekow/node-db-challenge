
exports.up = function(knex) {
  return knex.schema
  .createTable('projects', tbl => {
      tbl.increments(); 
      
  })
  .createTable('tasks', tbl => {
      tbl.increments(); 
  })
  .createTable('resources', tbl => {
      tbl.increments(); 
      tbl.string('name', 255).notNullable();
      tbl.string('description', 255); 
    //foreign key for project
      tbl.integer('projects_id')
        .unsigned()
        .references('id')
        .inTable('species')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE'); 
  })
};

exports.down = function(knex) {
  
};
