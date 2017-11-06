var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('about', { title: 'Welcome' });
});

router.get('/resume', function(req,res,next){
  res.render('resume', { title : 'Resume Goes Here!'});
});

router.get('/about', function(req,res,next){
    res.render('about', { title : 'All About Me!'});
});
router.get('/gallery', function(req,res,next){
  res.render('gallery', { title : '360 of Ness'});
});
router.get('/bot', function(req,res,next){
    res.render('chat', { title : 'Chat with Ness\'ai'});
});

module.exports = router;
