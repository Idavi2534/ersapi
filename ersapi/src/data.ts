const Pool = require('pg').Pool
 const pool= new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'thistest',
  password: 'postgres',
  queueLimit : 0, // unlimited queueing
  connectionLimit : 0, // unlimited connections 
  port: 5432,
})

export= pool;