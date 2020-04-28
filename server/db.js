const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'postgres',
  password: '', //the password for postgress account
  host: 'localhost',
  port: 5432,
  database: 'perntodo', //database name in this case perntodo
});

module.exports = pool;
