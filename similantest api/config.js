const mariadb = require("mariadb");

const pool = mariadb.createPool({
  host: '127.0.0.1', 
  user:'root', 
  password: '1234',
  connectionLimit: 5,
  port: 4306,
  database: 'similantest'
});

module.exports = pool;