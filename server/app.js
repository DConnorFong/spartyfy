let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let session = require('express-session');
let reqIp = require('request-ip');

let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');
let sessionsRouter = require('./routes/sessions');
let searchRouter = require('./routes/search');
let playlistsRouter = require('./routes/playlists');
let voteRouter = require('./routes/vote');

let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({secret: 'the_secret'}));
app.use(allowCors);
app.use(reqIp.mw());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/sessions', sessionsRouter);
app.use('/search', searchRouter);
app.use('/playlists', playlistsRouter);
app.use('/vote', voteRouter);


module.exports = app;


function allowCors(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
}