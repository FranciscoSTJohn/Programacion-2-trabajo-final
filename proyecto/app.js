var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session= require('express-session');
let db =require('../proyecto/database/models')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
let productRouter = require('./routes/product');
let profileRouter = require('./routes/profile');
let loginRouter = require('./routes/login');
let registerRouter = require('./routes/register');
let searchResultsRouter = require('./routes/search-results')


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Session
app.use(session({
  secret: "TFI",
  resave: false,
  saveUninitialized: true
}));

//datos de session a las vistas
app.use(function(req, res, next){
  if(req.session.user!= undefined){
    res.locals.user = req.session.user
    return next();
  }
  return next();  
});

app.use(function(req, res, next){
  //return console.log(req.cookie.InfoUser)
  if (req.cookies.info_usuario != undefined && req.session.user == undefined){
    let id_cookie = req.cookies.info_usuario;

    db.Usuario.findByPk(id_cookie)
    .then((user)=>{
      req.session.user = user.dataValues
      res.locals.user = user.dataValues
      return next();
    }).catch((e)=>{
      console.log(e)
    });
  } else{
    return next()
  }
})



//Routes
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/product', productRouter);
app.use('/profile', profileRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/searchResults', searchResultsRouter);

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
