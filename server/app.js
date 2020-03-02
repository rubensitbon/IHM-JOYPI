var express = require('express');
const customAuthMiddleware = require('./middleware/custom-auth-middleware');
const bodyParser = require('body-parser');
var path = require('path');
var dotenv = require('dotenv').config({ path: path.join(__dirname, '.env') });
const exphbs = require('express-handlebars');

var indexRouter = require('./routes/index');
var eventRouter = require('./routes/event');

var cors = require('cors');

var app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(customAuthMiddleware);
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/', indexRouter);
app.use('/api/event', eventRouter);

module.exports = app;
