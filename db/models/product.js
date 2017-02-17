module.exports = function(sequelize, DataTypes) {
  return sequelize.define('product', {
  	id: {
  		type: DataTypes.INTEGER,
  		primaryKey: true,
  		autoIncrement: true
  	},
  	name: {
  		type: DataTypes.STRING
  	},
  	price: {
  		type: DataTypes.FLOAT
  	}
  });
}
