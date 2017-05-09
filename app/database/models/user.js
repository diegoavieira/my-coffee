module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    idUser: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pass: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    tableName:"user",
    createdAt: false,
    updatedAt: false
  });
}
