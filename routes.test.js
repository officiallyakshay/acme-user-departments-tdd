const app = require('supertest')(require('../app'));
const { expect } = require('chai');
describe('Routes', () => {
  let seed;
  beforeEach(async () => {
    seed = await db.syncAndSeed();
  });
  describe('GET /api/names', () => {
    it('returns names', () => {
      return app.get('/api/names')
        .expect(200)
        .then( response => {
          expect(response.body.length).to.equal(4);
        })
    });
  });
  describe('GET /api/names/:id', () => {
    it('returns a name', () => {
      return app.get(`/api/names/${seed.names.foo1.id}`)
        .expect(200)
        .then( response => {
          expect(response.body.name).to.equal('foo1');
        })
    });
  });
})