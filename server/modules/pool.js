const pg = require('pg');
const Pool = pg.Pool; // creates new instance of 'pool' from 'pg'

let databaseName = 'react-gallery'; //Default database name

if (process.env.NODE_ENV === 'test') {
  databaseName = 'prime_testing'
}

const pool = new pg.Pool({
    host: 'localhost',
    port: 5432,
    database: databaseName, // database to connect to. 
    allowExitOnIdle: true  
});

module.exports = pool; //exports pool object