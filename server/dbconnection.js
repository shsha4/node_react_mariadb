const mysql = require('mysql');
const connection = mysql.createPool({
   host: '127.0.0.1',
   port: 3306,
   user: 'root',
   password: 'root',
   database: 'test'
});

module.exports=connection;
