
exports.up = function(knex) {
    return knex.schema
    .createTable('projects1', tbl => {
        tbl.increments(); 
        tbl.string('name', 255).notNullable(); 
        tbl.string('description', 255); 
        tbl.boolean('completed').defaultTo(false); 
        
    })
    .createTable('tasks1', tbl => {
        tbl.increments(); 
        tbl.string('description', 255).notNullable(); 
        tbl.string('notes', 255)
        tbl.boolean('completed').defaultTo(false); 
        tbl.integer('projects_id')
        .unsigned()
        .references('id')
        .inTable('projects1')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE'); 
        
    })
    .createTable('resources1', tbl => {
        tbl.increments(); 
        tbl.string('name', 255).notNullable();
        tbl.string('description', 255); 
      //foreign key for project
        tbl.integer('projects_id')
          .unsigned()
          .references('id')
          .inTable('projects1')
          .onDelete('RESTRICT')
          .onUpdate('CASCADE'); 
    })
    .createTable('projects_resources1', tbl => {
        tbl.increments(); 
  
        tbl
          .integer('project_id')
          .unsigned()
          .references('id')
          .inTable('projects1')
          .onDelete('RESTRICT')
          .onUpdate('CASCADE');
        tbl
          .integer('resources_id')
          .unsigned()
          .references('id')
          .inTable('resources1')
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