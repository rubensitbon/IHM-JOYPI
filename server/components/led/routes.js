var express = require('express');
var router = express.Router();
var hardware = require('./hardware');
const fs = require('fs');

/* GET home page. */

router.get('/', function(req, res, next) {
  // res.json(hardware.get());

  res.send(fs.readFileSync(__dirname + '/display.html').toString());
});

/* Register Route
========================================================= */
router.post('/', async (req, res) => {
  res.json(hardware.post());
});

module.exports = router;
