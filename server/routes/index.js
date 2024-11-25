var express = require('express');
var router = express.Router();

/* GET index page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home', 
                      description: 'This is a simple recipe book application. You can add edit, delete, and view your recipes.' });
});
/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Welcome to my Recipe Book!!',
  description: 'This is a simple recipe book application. You can add edit, delete, and view your recipes.' });
});
/* GET About page. */
router.get('/aboutus', function(req, res, next) {
  res.render('aboutus', { title: 'About me',
  description: 'Hi, my name is Zainab Syed, I am the developer of this recipe book application. I am passionate about cooking and sharing my recipes. I wanted to create a site where all of us can share our favourite recipes with others.'});
});
/* GET products page. */
router.get('/products', function(req, res, next) {
  res.render('products', { title: 'Products',
  description: 'Here are some of the projects I have created. You can also add your own recipes to this list in the recipes section.'});
});
/* GET service page. */
router.get('/service', function(req, res, next) {
  res.render('service', { title: 'Service',
  description: 'Our service includes creating, editing, deleting and viewing your recipes.'});
});
/* GET contactus page. */
router.get('/contactus', function(req, res, next) {
  res.render('contactus', { title: 'Contact Us',
  description: 'If you have any questions or need help with your recipes, please don\'t hesitate to contact me at zainab.syed1@ontariotechu.net.'});
});

/* GET recipes page. */
router.get('Recipes/list', function(req, res, next) {
  res.render('recipes', { title: 'Recipes',});
});

module.exports = router;
