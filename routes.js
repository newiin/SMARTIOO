const router = require('express').Router();
const HomeController = require('./controllers/HomeController');
const AboutController = require('./controllers/AboutController');

// Home page
router.get('/', HomeController.index);
router.get('/about', AboutController.about);
module.exports = router;
