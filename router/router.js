var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var controller = require('../controllers/controller.js');
var app = require('../app');

var router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));
router.use(cookieParser());

router.post('/register', controller.createUser);
router.post('/login', controller.login);
router.post('/game/recycling', controller.updateScore);
router.post('/game/charities', controller.updateCharity);
router.get('/game/charities',function(req,res) {
    controller.getCharities(req,function(err,charities) {
        var theme = charities.theme;
        if(app.cookieCheck(req,res) && !err) res.render('charities',{
            theme:theme,
            name1:charities.charities[0].name,
            des1:charities.charities[0].descrip,
            avatar1:charities.charities[0].avatar,
            name2:charities.charities[1].name,
            des2:charities.charities[1].descrip,
            avatar2:charities.charities[1].avatar,
            name3:charities.charities[2].name,
            des3:charities.charities[2].descrip,
            avatar3:charities.charities[2].avatar,
        });
    });
});

router.get('/account',function(req,res) {
    controller.getUser(req,function(err,user) {
        var score = user.score;
        if(app.cookieCheck(req,res) && !err) res.render('account',{
            papAmount:score.paper,
            mAmount:score.metal,
            plaAmount:score.plastic,
            gAmount:score.glass,
            profilePicture:user.profilePicture
        });
    });
});


router.get('/user/:name', function(req, res) {
    return controller.findOneUser(req, function(err, user) {
        var score = user.score;
        if(app.cookieCheck(req,res) && !err) res.render('account',{
            papAmount:score.paper,
            mAmount:score.metal,
            plaAmount:score.plastic,
            gAmount:score.glass,
            profilePicture:user.profilePicture
        });
    });
});

module.exports = router;