const { Sequelize } = require("sequelize");

const dbConnection = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,

  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DRIVER,
    define: {
      timestamps: false,
    },
    sync: { alter: false, logging: true },
  }
);
module.exports = dbConnection;
