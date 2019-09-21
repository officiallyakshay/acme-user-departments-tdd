const { expect } = require('chai');
const db = require('../db');
describe('DataLayer', () => {
  let seed;
  beforeEach(async () => {
    seed = await db.syncAndSeed();
  });
  describe('seeded data', () => {
    it('there is a foo', () => {
      expect(seed.products.foo.name).to.equal('foo');
    });
  });
})