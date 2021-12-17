const PotterWorld = require('./potterWorld-model')
const db = require('../../data/db-config')

beforeAll(async () => {
  await db.migrate.rollback()
  await db.migrate.latest()
})
beforeEach(async () => {
  await db.seed.run()
})
afterAll(async () => {
  await db.destroy() // disconnects from db
})

describe('potterWorld model', () => {
  describe('getAll', () => {
    let result
    beforeEach(async () => {
      result = await PotterWorld.getAll()
    })
    it('resolves all potterWorld in h table', async () => {
      expect(result).toHaveLength(4)
    })
  })
  describe('getById', () => {
    it('resolves a potterWorld with given id, name', async () => {
      const result = await PotterWorld.getById(1)
      expect(result).toMatchObject({ id: 1, name: 'sam' })
    })
   })
  describe('insert', () => {
    it('creates a new potter in db', async () => {
      await PotterWorld.insert({ name: 'bilbo' })
      const [bilbo] = await db('potterWorld').where('id', 5)
      expect(bilbo).toMatchObject({ id: 5, name: 'bilbo' })
      // const bilbo = await Hobbit.getById('id', 5) NOOO!!!!
    })
    it('resolves the new potterWorld with id, name', async () => {
           const result = await PotterWorld.insert({ name: 'bilbo' })
      expect(result).toMatchObject({ id: 5, name: 'bilbo' })
    })
  });
});
 });
