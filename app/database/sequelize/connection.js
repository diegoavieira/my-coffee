var Sequelize = require('sequelize');
var sequelize = new Sequelize('', '', '', {
  dialect: 'sqlite',
  storage: 'database.db'
});

module.exports = sequelize;
