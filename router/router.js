var express =require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var controller = require('../controllers/controller.js');


router.use(bodyParser.json())
router.use(bodyParser.urlencoded({extended: true}))

router.post('/register',controller.createUser);

module.exports = router;