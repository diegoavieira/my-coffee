var Sequelize = require('sequelize');
var sequelize = new Sequelize('basic-structure', 'postgres', '12345', {
  host: 'localhost',
  dialect: 'postgres',
  port: '5432',
  schema: 'public'
});

var db = {};
//models
db.user = sequelize.import('../database/models/user');
// db.sale = sequelize.import('../database/models/sale');

//models relations
// db.sale.belongsTo(db.user, {foreignKey: 'userId'});

sequelize.authenticate()
  .then(function() {
      console.log('Connection with database successfully!');
      sequelize.sync().then(function(data) {
        console.log('Synchronized models successfully!')
      }).catch(function(err) {
        console.log('Models not synchronized: ', err.message);
      });
    })
    .catch(function (err) {
      console.log('Database not connected: ', err.message);
    }
  );

  module.exports = db;
