var Sequelize = require('sequelize');
var sequelize = new Sequelize('cafeappdb', 'postgres', '12345', {
  host: 'localhost',
  dialect: 'postgres',
  port: '5432',
  schema: 'public'
});

module.exports = function() {
  var db = {};
  db.user = sequelize.import('./models/user');
  db.product = sequelize.import('./models/product');
  db.sale = sequelize.import('./models/sale');
  return db;
}

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
