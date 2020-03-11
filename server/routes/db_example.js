var express = require('express');
var router = express.Router();
const low = require('lowdb');
const FileAsync = require('lowdb/adapters/FileAsync');

// Create database instance and start server
const adapter = new FileAsync('db.json');
const db = low(adapter);

router.get('/posts/id/:id', (req, res) => {
  console.log('IN THE GET');
  low(adapter).then(db => {
    const post = db
      .get('posts')
      .find({ id: req.params.id })
      .value();

    res.send(post);
  });
});

// router.get('/posts/name/:name', (req, res) => {
//   console.log('IN THE GET');
//   low(adapter).then(db => {
//     const post = db
//       .get('posts')
//       .filter({ name: req.params.name })
//       .value();

//     res.send(post);
//   });
// });

router.get('/posts/IF/name/:name', (req, res) => {
  console.log('IN THE GET');
  low(adapter).then(db => {
    const post = db
      .get('posts')
      .filter({ IF: { name: req.params.name } })
      .value();

    res.send(post);
  });
});

// POST /posts
router.post('/posts', (req, res) => {
  console.log('IN THE POST');
  console.log('IN THE POST : req.body', req.body);

  low(adapter).then(db => {
    db.get('posts')
      .push(req.body)
      .last()
      .assign({ id: Date.now().toString() })
      .write()
      .then(post => res.send(post));
  });
});

module.exports = router;
