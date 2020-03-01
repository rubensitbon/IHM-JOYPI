var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Hello World !');
});

/* Register Route
========================================================= */
router.post('/register', async (req, res) => {
  return res.send('register');
});

/* Login Route
========================================================= */
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  return res.send('login');
});

module.exports = router;
