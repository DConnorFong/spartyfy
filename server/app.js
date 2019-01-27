let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let session = require('express-session');

let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');
let sessionsRouter = require('./routes/sessions');
let searchRouter = require('./routes/search');
let playlistsRouter = require('./routes/playlists');

let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({secret: 'the_secret'}));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/sessions', sessionsRouter);
app.use('/search', searchRouter);
app.use('/playlists', playlistsRouter);

module.exports = app;
