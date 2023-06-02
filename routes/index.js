var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home'});
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home'});
});


/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me' });
});

/* GET services page. */
router.get('/services', function(req, res, next) {
  res.render('layout', { title: 'Services'
});
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('layout', { title: 'Contact'
});
});

/* GET projects page. */
router.get('/projects', function(req, res, next) {
  res.render('layout', { title: 'Projects'
 });
});
module.exports = router;
