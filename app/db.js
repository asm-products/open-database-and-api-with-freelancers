var pg = require('pg');
var cnf = require('./cnf');

/**
 * Handle query result
 * @param {Function} next
 * @param {Object} client
 * @param {Function} done - releases the client back to the pool (if no params)
 * @param {Object} err
 * @param {Object} result
 */
var cbkQuery = function(next, client, done, err, result) {
  if (err){
    next(err);
    done(client);
    return;
  }
  
  next(null, result);
  done();
};

/**
 * Handle a connected client
 * @param {String} cmnd
 * @param {Function} next
 * @param {Object} err
 * @param {Object} client - connected client
 * @param {Function} done - release or remove a client
 *        a client passed to done() - removes it from the pool
 *        instead of simply returning to be reused
 */
var cbkConnect = function(cmnd, next, err, client, done) {
  if (err){
    next(err);
    done(client);
    return;
  }

  client.query(cmnd, cbkQuery.bind(null, next, client, done));
};

/**
 * Execute an SQL query
 *      create or use a connection from a pool
 * @param {String} cmnd - SQL command
 * @param {Function} next
 * @todo #43! validate an SQL command
 */
var runQuery = function(cmnd, next){
  pg.connect(cnf.DB_CONN, cbkConnect.bind(null, cmnd, next));
};

module.exports = {
  runQuery: runQuery
};