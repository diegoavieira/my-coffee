var Sequelize = require('sequelize');
var sequelize = null;

if (process.env.DATABASE_URL) {
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect:  'postgres',
    protocol: 'postgres',
    port:     match[4],
    host:     match[3],
    logging:  true
  });
} else {
	sequelize = new Sequelize('mycoffee', 'root', '12345', {
	  host: 'localhost',
	  dialect: 'mysql'
	});
}

module.exports = sequelize;
