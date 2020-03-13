var express = require('express');
var router = express.Router();
var hardware = require('./hardware');
const fs = require('fs');

/* GET route that returns the HTML FILE */

router.get('/display', function(req, res, next) {
  // res.json(hardware.get());

  res.send(fs.readFileSync(__dirname + '/display.html').toString());
});

router.get('/', function(req, res, next) {
  res.json(hardware.get());
});

/* POST Route
========================================================= */
router.post('/', async (req, res) => {
  const { emojis } = req.body;

  res.json(hardware.post(emojis));
});

module.exports = router;
