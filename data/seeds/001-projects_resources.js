
exports.seed = function(knex) {
  // Deletes ALL existing entries
  
      return knex('projects_resources').insert([
        {project_id: 1, resources_id: 3, },
        {project_id: 2, resources_id: 2, },
        {projects_id: 3, resources_id: 1, }
      ]);
    
};





