var express = require('express');
var router = express.Router();
var hardware = require('./hardware');
var fs = require('fs');
//var html = require('./display.html');

/* GET home page. */

router.get('/', function(req, res, next) {
  // res.json(hardware.get());

  res.sendFile(__dirname + '/display.html');
});

/* Register Route
========================================================= */
router.post('/', async (req, res) => {
  res.json(hardware.post());
});

module.exports = router;
