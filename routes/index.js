var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home',
mainHeading: 'This is the heading' });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home',
mainHeading: 'This is the heading' });
});


/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About Me',
mainHeading: 'This is the heading' });
});

/* GET services page. */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services',
mainHeading: 'This is the heading' });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact',
mainHeading: 'This is the heading' });
});

/* GET projects page. */
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Projects',
mainHeading: 'This is the heading' });
});
module.exports = router;
