var db = require('../database');
var io = require('socket.io');

exports.initialize = function(server) {
  io = io.listen(server);
  io.on('connection', function(socket) {

    socket.on('signupCheck', function(signup, callback) {
      db.user.findOne({where: {
        email: signup.email}
      }).then(function(data) {
        callback({
          success: true,
          email: data.email
        });
  		}).catch(function() {
  			callback({
          success: false,
          email: signup.email
        });
  		});
  	});

		socket.on('signup', function(signup, callback) {
			db.user.create({
        email: signup.email,
        name: signup.name,
        pass: signup.pass
      }).then(function(data) {
				callback({
          success: true,
          user: data
        });
        console.log('User create!');
      }).catch(function() {
				console.log('User does not create.');
      });
  	});

    socket.on('signin', function(signin, callback) {
      db.user.findOne({where: {
        email: signin.email,
        pass: signin.pass}
      }).then(function(data) {
        if(data != null) {
          console.log('User exists.');
          callback({
            success: true,
            user: data,
            logged: true
          });
        } else {
          console.log('User does not exist.');
          callback({
            success: false
          });
        }
  		});
  	});

		socket.on('makeCoffee', function(coffeeMaked, callback) {
			db.coffee.create({
        typeCoffee: coffeeMaked.coffee.type,
        cupSize: coffeeMaked.coffee.cup,
        sugarQtd: coffeeMaked.coffee.sugar,
				idUser: coffeeMaked.idUser,
        created: new Date()
      }).then(function(data) {
				callback({
          success: true,
          data: data
        });
        console.log('Coffee made whith success!');
      }).catch(function(err) {
				callback({
          success: false,
          err: err
        });
				console.log('Coffee error.');
      });
  	});

  });
}
