var sequelize = require('../database/sequelize');

var db = {};
//models
db.user = sequelize.import('./models/user');
// db.sale = sequelize.import('../database/models/sale');

//models relations
// db.sale.belongsTo(db.user, {foreignKey: 'userId'});

module.exports = db;
