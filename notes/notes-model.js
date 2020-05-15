const db = require('../data/dbConfig.js');

module.exports = {
  add,
  find,
  remove
};

function find() {
  return db('notes').select('id', 'title', 'date', 'text');
}

function add(note) {
  return db('notes').insert(note)
}

function remove(id) {
  return db('notes')
  .where({id})
  .del()
}
