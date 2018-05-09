var mongoose = require('mongoose');
var passwordHash = require('password-hash');
var UserInfo = mongoose.model('account');

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
                res.redirect("/home");
            } else {
                res.sendStatus(400);
            }
        } else {
            res.sendStatus(404);
        }
    })
};

module.exports.createUser = createUser;
module.exports.login = login;