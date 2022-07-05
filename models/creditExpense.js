const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize('database', 'sail', 'password', {
  host: 'db',
  dialect: 'mysql' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});

const credits = sequelize.define("credits_expenses", {
  credits: DataTypes.STRING,
  reward: DataTypes.STRING,
  user_id: DataTypes.BIGINT,
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
});



module.exports = credits;
