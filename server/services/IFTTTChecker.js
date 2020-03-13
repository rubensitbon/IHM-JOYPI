const low = require('lowdb');
const FileAsync = require('lowdb/adapters/FileAsync');

// Create database instance and start server
const adapter = new FileAsync('db.json');
const db = low(adapter);

function check({ name, label, value }) {
  console.log('IN CHECK : name', name);
  console.log('IN CHECK : label', label);
  console.log('IN CHECK : value', value);

  low(adapter).then(db => {
    const posts = db
      .get('posts')
      .filter({ IF: { name, label, value } })
      .value();

    if (posts) {
      console.log('YA QQCHOSE post', posts);
      posts.forEach(post => console.log('Action à faire : THEN', post.THEN));
    }
  });
}

// Syntax to export functions
exports.check = check;
