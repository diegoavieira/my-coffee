module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userEmail: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userPass: {
      type: DataTypes.STRING,
      allowNull: true
    }
  },
  {
    schema:"public",
    tableName:"user",
    createdAt: false,
    updatedAt: false
  });
}
