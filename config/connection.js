const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  "food_lovers_db",
  "root",
  "Kishore@123",
  {
    host: "localhost",
    dialect: "mysql",
    port: 3306
  }
);

module.exports = sequelize;
