var app = require('./config/express');
var http = require('http').Server(app);

http.listen(3000, function() {
  console.log('Server listening at port 3000');
});

require('./app/controllers/sockets.js').initialize(http);
