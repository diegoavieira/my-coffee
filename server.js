var app = require('./config/express')();

app.listen(3000, function() {
  console.log('Server listening at port 3000');
});

var db = require('./db/database')();

app.get('/', function(req, res) {
  db.user.findOne().then(function(data) {
    console.log('Search name: ', data.name);
    res.json(data);
  }).catch(function(err) {
    console.log(err);
  });
});
