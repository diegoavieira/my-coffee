var app = require('./config/express');
var http = require('http').Server(app);
var sequelize = require('./app/database/sequelize/connection');

// http.listen(3000, function() {
//   console.log('Server listening at port 3000');
// });

require('./app/controllers/sockets.js').initialize(http);

sequelize.authenticate()
  .then(function() {
      console.log('Connection with database successfully!');
			sequelize.sync().then(function(data) {
        console.log('Synchronized models successfully!');
				http.listen(3000, function() {
				  console.log('Server listening at port 3000');
				});
      }).catch(function(err) {
        console.log('Models not synchronized: ', err.message);
      });
    })
    .catch(function (err) {
      console.log('Database not connected: ', err.message);
    }
  );
