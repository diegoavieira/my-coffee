var Sequelize = require('sequelize');
var sequelize = new Sequelize('mycoffee', 'postgres', '12345', {
  host: '127.0.0.1',
  dialect: 'postgres'
});

module.exports = sequelize;
