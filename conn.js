const Sequelize = require('sequelize');

module.exports = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/acme_user_departments_tdd', {
  logging: false
});