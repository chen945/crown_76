const { Pool } = require('pg');

const isProduction = process.nev.MODE_ENV==="production";

let pool;

if (isProduction){
  pool =new pool({
    connectionString:isProduction
    ?process.env.DATABASE_URL
    `postgres://postgres:0000@localhost:5432/crown_76`,
  });

}
else{
  pool=new pool ({
    user: 'postgres',
    host: 'localhost',
    database: 'crown_76',
    password: '0000',
    port: '5432',
  });
}



  //connectionString: isProduction ? process.env.DATABASE_URL:`postgres://postgres:0000@localhost:5432/crowns76.`


pool.query('SELECT * from category', (err, res) => {
  console.log(JSON.stringify(res.rows));
  pool.end();
  })

  module.exports = pool;