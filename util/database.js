const { Sequelize } = require("sequelize");

module.exports = new Sequelize("node-complete", "root", "1234", {
  dialect: "mysql",
  host: "localhost",
});
