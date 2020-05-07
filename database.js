const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
host: 'remotemysql.com',
  user: 'mQc5dAWirH',
  password: 'B12ickuO56',
  database: 'mQc5dAWirH',
  multipleStatements: true
});

mysqlConnection.connect(function (err) {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log('db is connected');
  }
});

module.exports = mysqlConnection;
