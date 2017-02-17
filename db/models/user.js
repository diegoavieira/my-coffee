module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
  	id: {
  		type: DataTypes.INTEGER,
  		primaryKey: true,
  		autoIncrement: true
  	},
  	name: {
  		type: DataTypes.STRING
  	},
  	email: {
  		type: DataTypes.STRING
  	},
  	pass: {
  		type: DataTypes.STRING
  	}
  });
}
