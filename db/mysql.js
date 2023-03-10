var mysql = require('mysql');
require('dotenv').config()
var connection = mysql.createConnection({   
    host: process.env['MYSQL_HOST'],
    user: process.env['MYSQL_USERNAME'],
    password: process.env['MYSQL_PASSWORD'],
    database: process.env['MYSQL_DATABASE'],
});

connection.connect(function (err) {
    if (err) throw err;
});

module.exports = connection