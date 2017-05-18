var Sequelize = require('sequelize');
var sequelize = new Sequelize(process.env.DATABASE_URL, {
  logging: false
});

module.exports = sequelize;
