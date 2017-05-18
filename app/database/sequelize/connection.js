var Sequelize = require('sequelize');
var sequelize = null;

if (process.env.DATABASE_URL) {
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect:  'postgres',
    protocol: 'postgres',
    logging:  true
  });
} else {
	sequelize = new Sequelize('mycoffee', 'root', '12345', {
	  host: 'localhost',
	  dialect: 'mysql'
	});
}

module.exports = sequelize;
