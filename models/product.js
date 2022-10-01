const { DataTypes } = require("sequelize");
const sequelize = require("../util/database");

const Product = sequelize.define("product", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  price: {
    type: DataTypes.DOUBLE,
    allowNull: true,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = Product;
