// ========================================
// SETUP
// ========================================
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var seedDB = require('./seeds');
var Products = require('./models/Product');
var User = require('./models/User');
var passport = require('passport');
var localStrategy = require('passport-local');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
seedDB();
mongoose.connect(
  'mongodb+srv://admin-refael:1234@logintest-gmaih.mongodb.net/ShopWeb'
);

///passport config
app.use(
  require('express-session')({
    secret: 'this is my first real Shop',
    resave: false,
    saveUninitialized: false
  })
);
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// ========================================
// ROUTES
// ========================================

// =====INDEX ROUTES======
app.get('/', function(req, res) {
  console.log('<=  GET / (landing page)');
  res.redirect('products');
});

app.get('/products', async function(req, res) {
  await Products.find({}, function(err, foundProuduct) {
    if (err) {
      console.log(err);
      res.send('תקלה במשיכת הנתונים ');
    } else {
      res.render('index', { product: foundProuduct });
    }
  });
});

app.get('/products/list', isLogin, async function(req, res) {
  await Products.find({}, function(err, foundProuduct) {
    if (err) {
      console.log(err);
      res.send('תקלה במשיכת הנתונים ');
    } else {
      console.log(req.user);
      console.log(User);

      res.render('list', { product: foundProuduct });
    }
  });
});

// =====SHOW ROUTES======

app.get('/products/:id', async function(req, res) {
  await Products.findById(req.params.id, function(err, foundProduct) {
    if (err) {
      console.log(err);
    } else {
      res.render('show', { product: foundProduct });
    }
  });
});

//=======Auth Routh========
app.get('/register', function(req, res) {
  res.render('register');
});

app.post('/register', function(req, res) {
  var newUser = new User({ username: req.body.username });
  User.register(newUser, req.body.password, function(err, user) {
    if (err) {
      console.log(err);
    } else {
      console.log(user);
      passport.authenticate('local')(req, res, function() {
        res.redirect('/products');
      });
    }
  });
});

app.get('/login', function(req, res) {
  res.render('login');
});
app.post(
  '/login',
  passport.authenticate('local', {
    successRedirect: '/products',
    failureRedirect: '/login'
  }),
  function(req, res) {}
);

function isLogin(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect('/login');
  }
}

// ========================================
// PORT LISTENING
// ========================================
app.listen(3000, function() {
  console.log('Shop server has started...');
});
