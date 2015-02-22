/**
 * Config options
 *     process environments only here
 */
 
var cnf = {
};

cnf.DB_CONN = {
  host: process.env.DDD_HOST,
  user: process.env.DDD_USER,
  password: process.env.DDD_PASSWORD,
  port: process.env.DDD_PORT,
  database: process.env.DDD_DATABASE
};

cnf.APP_ENV = process.env.APP_ENV || 'release';

module.exports = cnf;