const conn = require('./conn');
const Name = require('./Name');

const mapAndCreate = (items, model) => {
  return Promise.all(items.map( item => model.create(item)));
}

const syncAndSeed = async () => {
  await conn.sync({ force: true });
  const names = [
    { name: 'foo' },
    { name: 'bar' },
    { name: 'bazz' },
    { name: 'quq' }
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