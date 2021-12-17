const db = require('../../data/db-config.js')

module.exports = {
  insert,
  update,
  remove,
  getAll,
  getById,
}

function getAll() {
  return db('potterWorld')
  
}

function getById(id) {
  return db('potterWorld')
    .where('id', id)
    .first()
}

async function insert(potter) {
  // with postgres you can do:
  // return db('hobbits').insert(hobbit, ['id', 'name'])
  return db('potterWorld')
    .insert(potter)
    .then(([id]) => {
      return getById(id)
    })
}

async function update(id, changes) {
  return null
}

function remove(id) {
  return null
}
