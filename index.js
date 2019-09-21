const conn = require('./conn');
const Name = require('./Name');
const Department = require('./Department');

const mapAndCreate = (items, model) => {
  return Promise.all(items.map( item => model.create(item)));
}

const syncAndSeed = async () => {
  await conn.sync({ force: true });
  const names = [
    { name: 'foo1' },
    { name: 'foo2' },
    { name: 'bar' },
    { name: 'bazz' }
  ];
  const [ foo, bar, bazz, quq ] = await mapAndCreate(names, Name)

  const departments = [
    { name: 'FOO' },
    { name: 'BAR' },
    { name: 'BAZZ' },
    { name: 'QUQ' }
  ];
  const [ foo, bar, bazz, quq ] = await mapAndCreate(names, Name)

  return {
    products: {
      foo,
      bar,
      bazz,
      quq
    }
  }
};

module.exports = {
  syncAndSeed
}