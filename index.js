const conn = require('./conn');
const Name = require('./Name');
const Department = require('./Department');

Name.belongsTo(Department);

const mapAndCreate = (items, model) => {
  return Promise.all(items.map( item => model.create(item)));
}

const syncAndSeed = async () => {
  await conn.sync({ force: true });
  const departments = [
    { name: 'FOO' },
    { name: 'BAR' },
    { name: 'BAZZ' },
    { name: 'QUQ' }
  ];
  const [ FOO, BAR, BAZZ, QUQ ] = await mapAndCreate(departments, Department)

  const names = [
    { name: 'foo1', departmentId: FOO.id },
    { name: 'foo2', departmentId: FOO.id  },
    { name: 'bar', departmentId: BAR.id  },
    { name: 'bazz', departmentId: BAZZ.id  }
  ];
  const [ foo1, foo2, bar, bazz ] = await mapAndCreate(names, Name)

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