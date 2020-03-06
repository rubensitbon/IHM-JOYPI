var express = require('express');
var router = express.Router();
var hardware = require('./hardware');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json(hardware.get());
});

/* Register Route
========================================================= */
router.post('/', async (req, res) => {
  res.json(hardware.post());
});

module.exports = router;
