const pg = require('postgres');


const sql = pg({ 
    database: 'crud',
    username: 'postgres',
    password: 'root',
    host: 'localhost',
    port: 5432
 })

 module.exports = sql;