exports.up = function(knex, Promise) {
    return knex.schema
      .createTable('notes', tbl => {
        tbl.increments();
        tbl.string('title', 128)
        .notNullable()
        tbl.string('date', 128)
          .notNullable();
        tbl.string('text', 128)
          .notNullable();
      })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema
      .dropTableIfExists('notes')
  };
  