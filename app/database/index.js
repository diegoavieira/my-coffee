var Sequelize = require('sequelize');
var sequelize = new Sequelize('cafeappdb', 'postgres', '12345', {
  host: 'localhost',
  dialect: 'postgres',
  port: '5432',
  schema: 'public'
});

var db = {};
db.user = sequelize.import('../database/models/user');
//add models here

sequelize.authenticate()
  .then(function() {
      console.log('Connection with database successfully!');
      sequelize.sync().then(function(data) {
        console.log('Synchronized models successfully!')
      }).catch(function(err) {
        console.log('Models not synchronized: ', err);
      });
    })
    .catch(function (err) {
      console.log('Database not connected: ', err);
    }
  );

  module.exports = db;
