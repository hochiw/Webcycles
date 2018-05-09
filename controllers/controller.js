var mongoose = require('mongoose');
var passwordHash = require('password-hash');
var UserInfo = mongoose.model('account');
var server = require('../app');

var createUser = function(req,res) {
    var user = new UserInfo({
        "username":req.body.username,
        "password":passwordHash.generate(req.body.password),
        "email":req.body.email,
    });

    user.save(function(err) {
        if(!err) {
            res.redirect("./login");
        } else {
            res.sendStatus(400);
        }
    })
}

var login = function(req,res) {

    var username = req.body.username;
    UserInfo.findOne({username: username},function(err,user) {
        if (!err && user != null) {
            if (passwordHash.verify(req.body.password,user.password)) {
                res.cookie('userID',user.id, { maxAge: 900000, httpOnly: true })
                res.redirect("/home");
            } else {
                server.io.emit("messages","Password is incorrect.");
            }
        } else {
            server.io.emit('messages','Account does not exist');
        }
    })
};

module.exports.createUser = createUser;
module.exports.login = login;