var express = require('express');
var router = express.Router();
var db = require('../db');


/* GET home page. */
router.get('/', function(req, res, next) {

  var cbkSelect = function(err, result) {
    if (err) {
      res.send({
        msg: 'db error',
        err: err
      });
      return;
    }

    res.send({
      result: result.rows[0].the_time
    });
  };

  // demo connection to database
  db.runQuery('SELECT NOW() as "the_time"', cbkSelect);

});

module.exports = router;
