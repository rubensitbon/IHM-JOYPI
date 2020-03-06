var express = require('express');
const customAuthMiddleware = require('./middleware/custom-auth-middleware');
const bodyParser = require('body-parser');
var path = require('path');
var dotenv = require('dotenv').config({ path: path.join(__dirname, '.env') });
const exphbs = require('express-handlebars');
const { readdirSync } = require('fs');

var indexRouter = require('./routes/index');
var eventRouter = require('./routes/event');

var cors = require('cors');

var app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(customAuthMiddleware);
app.use(express.static(path.join(__dirname, 'public')));
app.engine('html', require('ejs').renderFile);

app.use('/api/', indexRouter);
app.use('/api/event', eventRouter);

const getDirectories = source =>
  readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

console.log('getDirectories', getDirectories('./components'));

getDirectories('./components').forEach(component => {
  const componentRouter = require(`./components/${component}/routes`);
  app.use(`/api/${component}`, componentRouter);
  return;
});

module.exports = app;
