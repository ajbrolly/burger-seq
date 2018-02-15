module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
      burger: DataTypes.STRING,
      devoured: DataTypes.TINYINT
    });
    return Burger;
  };
  