var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('index.html', {root: 'pages'});
});

router.get('/index', function(req, res, next) {
  res.sendFile('index.html', {root: 'pages'});
});

router.get('/about', function(req, res, next) {
  res.sendFile('about.html', {root: 'pages'});
});

router.get('/contact_me', function(req, res, next) {
  res.sendFile('contact_me.html', {root: 'pages'});
});

router.get('*', function(req, res){
  res.sendFile('404.html', {root: 'pages'});
});

module.exports = router;
