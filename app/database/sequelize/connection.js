var Sequelize = require('sequelize');
var sequelize = new Sequelize('mycoffee', 'root', '12345', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
