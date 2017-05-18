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
    },
    created: {
      type: DataTypes.DATE(6),
      allowNull: false
    }
  },
  {
    tableName:"coffee",
    schema:"public",
    createdAt: false,
    updatedAt: false
  });
}
