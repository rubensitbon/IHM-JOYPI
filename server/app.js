var express = require('express');
const customAuthMiddleware = require('./middleware/custom-auth-middleware');
const IFTTTMiddleware = require('./middleware/IFTTT-middleware');
const bodyParser = require('body-parser');
var path = require('path');
var dotenv = require('dotenv').config({ path: path.join(__dirname, '.env') });
const exphbs = require('express-handlebars');
const { readdirSync } = require('fs');

var indexRouter = require('./routes/index');
var eventRouter = require('./routes/event');
var dbExampleRouter = require('./routes/db_example');

var cors = require('cors');

const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const eventEmitter = new MyEmitter();

// instantiate the express server
var app = express();

// Allow CORS
app.use(cors());

// Server Params
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(customAuthMiddleware);
app.use(IFTTTMiddleware);
app.use(express.static(path.join(__dirname, 'public')));
app.engine('html', require('ejs').renderFile);

// Register Endpoints
app.use('/api/', indexRouter);
app.use('/api/event', eventRouter);
app.use('/api/db-example', dbExampleRouter);

// Function to get the list of all directories in a directory
const getDirectories = source =>
  readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

// Log all directories in the components folder
console.log('getDirectories', getDirectories('./components'));

// For each directories in the components directory
getDirectories('./components').forEach(component => {
  // Register all API EndPoints
  const componentRouter = require(`./components/${component}/routes`);
  app.use(`/api/${component}`, componentRouter);

  // Register events linked to the component
  eventEmitter.on(`${component}`, function(a, b) {
    console.log(a, b, this, this === eventEmitter);
  });
  return;
});

module.exports = app;
