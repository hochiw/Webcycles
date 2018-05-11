var mongoose = require('mongoose');
var passwordHash = require('password-hash');
var server = require('../app');


var UserInfo = mongoose.model('account');
var Charities = mongoose.model('charities');

var createUser = function(req,res) {

    var User = new UserInfo({
        "username":req.body.username,
        "password":passwordHash.generate(req.body.password),
        "email":req.body.email,
    });
    UserInfo.find({$or: [{email: req.body.email}, {username: req.body.username}]},function(err,user) {
        if (!err && user.length == 0) {
            User.save(function (err) {
                if (!err) {
                    res.redirect("./login");
                } else {
                    res.sendStatus(400);
                }
            });
        } else {
            res.render('login',{reg_fail_msg:"Account or Email already exists"});
        }
    });


}


var login = function(req,res) {

    var username = req.body.username;
    UserInfo.findOne({username: username},function(err,user) {
        if (!err && user != null) {
            if (passwordHash.verify(req.body.password,user.password)) {
                res.cookie('userID',user.id, { maxAge: 900000});
                res.cookie('username',username,{ maxAge: 900000})
                res.redirect("/home");
            } else {
                res.render('login',{log_fail_msg:"Password is incorrect."});
            }
        } else {
            res.render('login',{log_fail_msg:"Account does not exist"});
        }
    })
};
var updateCharity = function(req,res) {
    UserInfo.findOne({_id: req.cookies.userID},function(err,result) {
        if (!err) {
            result.selectedCharity = req.body.charity;
            result.save(function(err) {
                if(!err) {
                    res.redirect("/game/charities?msg=103")
                } else {
                    res.redirect("/game/charities?msg=104")
                }
            });
        }
    });
}
var updateScore = function(req,res) {
    UserInfo.findOne({_id: req.cookies.userID},function(err,result) {
        if (!err) {
            result.score.paper += parseInt(req.body.Paper);
            result.score.plastic += parseInt(req.body.Plastic);
            result.score.metal += parseInt(req.body.Metal);
            result.score.glass += parseInt(req.body.Glass);
            result.score.total += parseInt(req.body.Total);
            result.save(function(err) {
                if(!err) {
                    res.redirect("/game/recycling?msg=103")
                } else {
                    res.redirect("/game/recycling?msg=104")
                }
            });
        } else {
            res.redirect("/game/recycling?msg=104")
        }
    })
}

var findOneUser = function(req,res){
    var username = req.param.username;
    UserInfo.findOne({username: username},function(err,user) {
        if(!err && user!= null) {
            res.send(user)
        }else{
            res.sendStatus(404);
        }
    });
};


var getUser = function(req,user) {
    UserInfo.findOne({_id: req.cookies.userID},user);
}

var getCharities = function(req,charities) {
    Charities.findOne({},charities);
}

module.exports.createUser = createUser;
module.exports.login = login;
module.exports.updateScore = updateScore;
module.exports.getUser = getUser;
module.exports.getCharities = getCharities;
module.exports.updateCharity = updateCharity;
module.exports.findOneUser = findOneUser;