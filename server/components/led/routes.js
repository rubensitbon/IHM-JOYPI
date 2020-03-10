var express = require('express');
var router = express.Router();
var hardware = require('./hardware');
const fs = require('fs');

/* GET route that returns the HTML FILE */

router.get('/', function(req, res, next) {
  // res.json(hardware.get());

  res.send(fs.readFileSync(__dirname + '/display.html').toString());
});

/* POST Route
========================================================= */
router.post('/', async (req, res) => {
  res.json(hardware.post());
});

module.exports = router;
