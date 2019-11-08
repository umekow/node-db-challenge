

exports.up = function(knex) {
    return knex.schema
    .createTable('projects', tbl => {
        tbl.increments(); 
        tbl.string('name', 255).notNullable(); 
        tbl.string('description', 255); 
        tbl.boolean('completed').defaultTo(false); 
        
    })
    .createTable('tasks', tbl => {
        tbl.increments(); 
        tbl.string('description', 255).notNullable(); 
        tbl.string('notes', 255).notNullable(); 
        tbl.boolean('completed').defaultTo(false); 
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
      
    })
    .createTable('projects_resources', tbl => {
        tbl.increments(); 
        //fk for projects
        tbl.integer('projects_id')
          .unsigned()
          .references('id')
          .inTable('projects')
          .onDelete('RESTRICT')
          .onUpdate('CASCADE');
  
          //fk for tasks
          tbl.integer('tasks_id')
          .unsigned()
          .references('id')
          .inTable('tasks')
          .onDelete('RESTRICT')
          .onUpdate('CASCADE');
    });
    
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('projects_resources')
      .dropTableIfExists('resources')
      .dropTableIfExists('tasks')
      .dropTableIfExists('projects'); 
  };