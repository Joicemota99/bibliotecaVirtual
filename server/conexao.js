const knex = require('knex');
const dotenv = require('dotenv');

dotenv.config();

const pool = knex({
  client: 'pg',
  connection: {
    host: 'localhost',
    user: 'postgres',
    password: process.env.DB_PASSWORD,
    port: 5432,
    database: 'dados_biblioteca'
  }
});

module.exports = pool;
