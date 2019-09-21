const { expect } = require('chai');
const db = require('../index');
describe('DataLayer', () => {
  let seed;
  beforeEach(async () => {
    console.log(db)
    seed = await db.syncAndSeed();
  });
  describe('seeded data', () => {
    it('there is a foo1', () => {
      expect(seed.products.foo1.name).to.equal('foo1');
    });
    it('there is a foo2', () => {
      expect(seed.products.foo2.name).to.equal('foo2');
    });
    it('foo 1 belongs to FOO category', () => {
      
    });
  });
})