const conn = require('./conn');
const Name = require('./Name');
const Department = require('./Department');

Name.belongsTo(Department);

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
  const [ foo1, foo2, bar, bazz ] = await mapAndCreate(names, Name)

  const departments = [
    { name: 'FOO' },
    { name: 'BAR' },
    { name: 'BAZZ' },
    { name: 'QUQ' }
  ];
  const [ FOO, BAR, BAZZ, QUQ ] = await mapAndCreate(departments, Department)

  return {
    names: {
      foo1,
      foo2,
      bar,
      bazz
    },
    departments: {
      FOO,
      BAR,
      BAZZ,
      QUQ
    }
  }
};

module.exports = {
  syncAndSeed
}