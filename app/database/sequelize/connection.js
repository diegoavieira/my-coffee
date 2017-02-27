var Sequelize = require('sequelize');
var sequelize = new Sequelize('my_coffee', 'postgres', '12345', {
  host: 'localhost',
  dialect: 'postgres',
  port: '5432',
  schema: 'public'
});

module.exports = sequelize;
