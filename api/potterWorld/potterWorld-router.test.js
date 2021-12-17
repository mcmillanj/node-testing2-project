const request = require('supertest')
const server = require('../server')
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

it('is the correct env', () => {
  expect(process.env.NODE_ENV).toBe('testing')
})
describe('potterWorld router', () => {
  describe('[GET] /hobbits', () => {
    let res
    beforeEach(async () => {
      res = await request(server).get('/potterWorld')
    })
    it('responds with 200 OK', async () => {
      expect(res.status).toBe(200)
    })
    it('responds with all potterWorld', async () => {
      expect(res.body).toHaveLength(4)
    })
  })
  describe('[POST] /potterWorld', () => {
    let res
    beforeEach(async () => {
      res = await request(server)
        .post('/potterWorld/')
        .send({ name: 'gabe' })
    })
    it('responds with a 210 created', async () => {
      expect(res.status).toBe(201)
    })
    it('responds with new potterWorld', async () => {
      expect(res.body).toMatchObject({ id: 5, name: 'gabe' })
    })
})
   }) 
// })