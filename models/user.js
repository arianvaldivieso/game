const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize('database', 'sail', 'password', {
  host: 'db',
  dialect: 'mysql' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});

const user = sequelize.define("user", {
  username: DataTypes.STRING,
  last_date: DataTypes.STRING,
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
});



module.exports = user;
