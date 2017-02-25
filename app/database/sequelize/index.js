var Sequelize = require('sequelize');
var sequelize = new Sequelize('basic-structure', 'postgres', '12345', {
  host: 'localhost',
  dialect: 'postgres',
  port: '5432',
  schema: 'public'
});

module.exports = sequelize;
