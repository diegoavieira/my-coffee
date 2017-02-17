module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sale', {
  	id: {
  		type: DataTypes.INTEGER,
  		primaryKey: true,
  		autoIncrement: true
  	}
  });
}
