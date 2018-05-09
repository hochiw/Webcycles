var express = require('express');
var bodyParser = require('body-parser');
var controller = require('../controllers/controller.js');
var router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

    router.post('/register', controller.createUser);
    router.post('/login', controller.login);


module.exports = router;