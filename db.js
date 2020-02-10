const mysql = require('mysql2');
const pool = mysql.createPool({
    host: 'mydatabases.cqt0uu1hoxnp.us-east-1.rds.amazonaws.com',
    user: 'zameer',
    database: 'node',
    password: '3kc05ec045'
});

module.exports = pool.promise();