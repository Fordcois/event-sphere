const Pool = require("pg").Pool;
require("dotenv").config();

const isAWS = process.env.ONLINE === 'AWS-RDS';

const dbConfig = {
  user: isAWS ? process.env.LIVEUSERNAME : process.env.USERNAME,
  password: isAWS ? process.env.LIVEPASSWORD : process.env.PASSWORD,
  host: isAWS ? process.env.LIVEHOST : process.env.HOST,
  port: isAWS ? process.env.LIVEDBPORT : process.env.DBPORT,
  database: isAWS ? process.env.LIVEDBNAME : process.env.DBNAME,
  ...(isAWS && {ssl: {rejectUnauthorized: false,},}),
};

const pool = new Pool(dbConfig);

console.log(isAWS ? 'Connecting to AWS-CONNECT' : 'Connecting to LOCALHOST');

module.exports = pool;