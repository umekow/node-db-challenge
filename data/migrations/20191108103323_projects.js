
exports.up = function(knex) {
  return knex.schema
  .createTable('projects', tbl => {
      tbl.increments(); 
      tbl.string('name', 255).notNullable(); 
      tbl.string('description', 255); 
      tbl.boolean('completed'); 
      
  })
  .createTable('tasks', tbl => {
      tbl.increments(); 
      tbl.string('description', 255).notNullable(); 
      tbl.string('notes', 255)
      tbl.boolean('completed'); 
      tbl.integer('projects_id')
      .unsigned()
      .references('id')
      .inTable('projects')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE'); 
      
  })
  .createTable('resources', tbl => {
      tbl.increments(); 
      tbl.string('name', 255).notNullable();
      tbl.string('description', 255); 
    //foreign key for project
      tbl.integer('projects_id')
        .unsigned()
        .references('id')
        .inTable('projects')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE'); 
  })
  .createTable('projects_resources', tbl => {
      tbl.increments(); 

      tbl
        .integer('project_id')
        .unsigned()
        .references('id')
        .inTable('projects')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
      tbl
        .integer('resources_id')
        .unsigned()
        .references('id')
        .inTable('resources')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');

      tbl.date('from').notNullable();
      tbl.date('to');
        
  });
  
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('projects_resources')
    .dropTableIfExists('resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('projects'); 
};
