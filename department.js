const conn = require('./conn');
const { UUID, UUIDV4, STRING, DECIMAL } = conn.Sequelize;

const Department = conn.define('department', {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
    allowNull: false
  },
  name: {
    type: STRING,
    unique: true,
    allowNull: false
  }
});

module.exports = Department;