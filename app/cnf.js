/**
 * Config options
 *     process environments only here
 */
 
var cnf = {
};

cnf.DB_CONN = {
  host: process.env.RDS_HOSTNAME,
  user: process.env.RDS_USERNAME,
  password: process.env.RDS_PASSWORD,
  port: process.env.RDS_PORT
};

module.exports = cnf;