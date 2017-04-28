var logger = require('morgan');
var path = require('path');
var cookieParser = require('cookie-parser');
var expressValidator = require('express-validator');
var flash = require('connect-flash');
var session = require('express-session');
var passport = require('passport');
var localStrategy = require('passport-local').Strategy;
var express = require('express');

// user schema/model
var User = require('./models/user.js');

var auth =  require('./routes/auth');
var r = require('./routes/movie-crud');
var t = require('./routes/theatre-crud');
var c = require('./routes/city-crud');
var b = require('./routes/booking-crud');
// var a = require('./routes/user-crud');

var bp = require('body-parser');

var app = express();

// BodyParser Middleware
 app.use(bp.json());
app.use(bp.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(__dirname + '/public'));
// app.use(bp.json());
// configure passport
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use('/movie', r);
app.use('/theatre', t);
app.use('/city',c);
app.use('/user', auth);
app.use('/book',b);

// app.use('/admin',a);

 // app.get('/login', function (req, res) {
 //    res.sendFile( __dirname + "/public" + "/views/lo.html" );
 // })


app.use(function(req,res,next){
  res.locals.user=req.user || null;
  next();
})

var mongoose = require('mongoose');

var dbhost= 'mongodb://localhost:27017/demo-data';
mongoose.connect(dbhost);

var db= mongoose.connection;
db.once('open', function(){
  console.log("connected to DB");
});

// Only load this middleware in dev mode (important).
if (app.get('env') === 'development') {
  var webpackMiddleware = require("webpack-dev-middleware");
  var webpack = require('webpack');

  var config = require('./webpack.config');

  app.use(webpackMiddleware(webpack(config), {
    publicPath: "/build",

    headers: { "X-Custom-Webpack-Header": "yes" },

    stats: {
      colors: true
    }
  }));

}

app.listen(5555, function(){
  console.log("server is running on 5555.");
});
