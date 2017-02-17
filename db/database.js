var Sequelize = require('sequelize');
var sequelize = new Sequelize('cafeappdb', 'postgres', '12345', {
  host: 'localhost',
  dialect: 'postgres',
  port: '5432',
  schema: 'public'
});

var db = {};

module.exports = function() {
  db.user = sequelize.import('./models/user');
  db.product = sequelize.import('./models/product');
  return db;
}
