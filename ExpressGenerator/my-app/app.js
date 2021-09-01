var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const authRouter = require('./routes/auth')
//import session
const session = require('express-session')
//import passport
const passport = require('passport')
const localStrategy = require('passport-local');

const User = require('./model/user');
const bcrypt = require('bcrypt')



//strategy
passport.use(new localStrategy((username, password, callback) => 
{
  User.findOne( { username }, (err, user) => 
  {
    if (err)
    {
        return callback(err)
    }

    if (!user)
    {
      return callback(null, false)
    }

    if (bcrypt.compareSync(password, user.password))
    {
      return callback(null, user)
    }
    return callback(null, false)
  })
}))

//serialize

passport.serializeUser((user, cb)=>
{
  cb(null, user._id)
})

passport.deserializeUser((id, cb)=>
{
  User.findById(id, (err, user)=>
  {
      if (err)
      {
        return cb(err)
      }
      cb(null, user)
  })
})





var app = express();
//session
app.use(cookieParser())
app.use(
    session(
      {
        secret: 'Male31609',
        resave: false,
        saveUninitialized: false
}))

require('./db')

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//init passport
app.use(passport.initialize())
app.use(passport.session())


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/auth', authRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
