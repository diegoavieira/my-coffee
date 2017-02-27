module.exports = function(sequelize, DataTypes) {
  return sequelize.define('coffee', {
    idCoffee: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
		idUser: {
			type: DataTypes.INTEGER,
      allowNull: false,
    },
    typeCoffee: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cupSize: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sugarQtd: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    schema:"public",
    tableName:"coffee",
    updatedAt: false
  });
}
