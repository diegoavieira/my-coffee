var sequelize = require('../database/sequelize/connection');

var db = {};
//models
db.user = sequelize.import('./models/user');
db.coffee = sequelize.import('./models/coffee');

//models relations
db.coffee.belongsTo(db.user, {foreignKey: 'idUser'});

module.exports = db;
