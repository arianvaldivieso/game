const mysql = require('mysql');


var pool  = mysql.createPool({
  connectionLimit : 10,
  host: process.env.MYSQL_HOST || '127.0.0.1',
  user: 'sail',
  password: 'password',
  database: 'database'
});


module.exports = pool;