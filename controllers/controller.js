var mongoose = require('mongoose');
var passwordHash = require('password-hash');
var UserInfo = mongoose.model('account');

var createUser = function(req,res) {
    var user = new UserInfo({
        "username":req.body.username,
        "password":passwordHash.generate(req.body.password),
        "email":req.body.email,
    });

    user.save(function(err,newUser) {
        if(!err) {
            res.redirect("./login");
        } else {
            res.sendStatus(400);
        }
    })
}

var findOneUser = function(req,res) {
    var username = req.body.username;
    UserInfo.findByTitle(username,function(err,user) {
        if (!err) {
            res.send(user);
        } else {
            res.sendStatus(404);
        }
    })
};

module.exports.createUser = createUser;
module.exports.findOneUser = findOneUser;