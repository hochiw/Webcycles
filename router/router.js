var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var controller = require('../controllers/controller.js');

var router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));
router.use(cookieParser());

router.post('/register', controller.createUser);
router.post('/login', controller.login);
router.post('/game/recycling', controller.updateScore);


module.exports = router;