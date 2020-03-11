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
  const { ligne1, ligne2 } = req.body;
  res.json(hardware.post(ligne1, ligne2));
});

module.exports = router;
