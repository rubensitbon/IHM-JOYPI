var express = require('express');
var router = express.Router();
const { readdirSync } = require('fs');

const getDirectories = source =>
  readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(getDirectories('./components'));
});

module.exports = router;
