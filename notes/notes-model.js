const db = require('../data/dbConfig.js');

module.exports = {
  add,
  find,
  findBy,
  findById,
};

function find() {
  return db('notes').select('id', 'title', 'date', 'text');
}

function findBy(filter) {
  return db('notes').where(filter);
}

// function add(note) {
//   const [id] = await db('notes').insert(note);

//   return find();
// }

function add(note) {
  return db('notes').insert(note)
}

function findById(id) {
  return db('users')
    .where({ id })
    .first();
}
