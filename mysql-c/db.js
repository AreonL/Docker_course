const mysql = require('mysql2');

module.exports = mysql.createConnection({
    host: '172.20.0.1',
    user: 'root',
    password: 'my-secret-pw',
    database: 'filter'
})