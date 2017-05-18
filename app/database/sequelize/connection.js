var Sequelize = require('sequelize');
var sequelize = new Sequelize(process.env.DATABASE_URL, {
  logging: false,
  dialectOptions: {
    ssl: true
  }
});

module.exports = sequelize;
