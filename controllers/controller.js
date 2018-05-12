var mongoose = require('mongoose');
var passwordHash = require('password-hash');
var server = require('../app');


var UserInfo = mongoose.model('account');
var Charities = mongoose.model('charities');
var exports = module.exports = {};

exports.createUser = function(req,res) {

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


exports.login = function(req,res) {

    var username = req.body.username;
    UserInfo.findOne({username: username},function(err,user) {
        if (!err && user != null) {
            if (passwordHash.verify(req.body.password,user.password)) {
                res.cookie('userID',user.id);
                res.cookie('username',username);
                res.redirect("/home");
            } else {
                res.render('login',{log_fail_msg:"Password is incorrect."});
            }
        } else {
            res.render('login',{log_fail_msg:"Account does not exist"});
        }
    })
};
exports.updateCharity = function(req,res) {
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
};

exports.addFollowed = function(req, res) {
    var username = req.body.username;
    console.log(username);
    UserInfo.findOne({_id: req.cookies.userID}, function(err, user) {
        if(!err) {
            if(user.followedList.includes(username)) {
               res.redirect("/game/friends?msg=106");
            }
            else {
                user.followedList.push(req.body.username);
                user.save(function(err) {
                    if (!err) {
                        res.redirect("/game/friends");
                    } else {
                        console.log(err);
                        res.redirect("/game/friends?msg=104");
                    }
                })
            }
        }
        else {
            console.log(err);
            res.redirect("/game/friends?msg=104");
        }
    });
};

exports.updateScore = function(req,res) {
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

exports.findOneUser = function(req, user) {
    var username = req.body.username;
    UserInfo.findOne({username: username}, user);
}

exports.getTop5Global = function(req,res,cb) {
    UserInfo.find({},function(err,list) {
        var top5 = [];
        list.forEach(function(user) {
            if (top5.length == 0) {
                top5.push({"username":user.username,"profile":user.profilePicture,"total":user.score.total});
            } else if (user.score.total >= top5[0].total) {
                top5.unshift({"username":user.username,"profile":user.profilePicture,"total":user.score.total});
            } else {
                top5.push({"username":user.username,"profile":user.profilePicture,"total":user.score.total});
            }
        });
        return cb(top5);
    })
};

exports.getTop5Friend = function(req,res,cb) {
    UserInfo.findOne({_id: req.cookies.userID}, function(err,user) {
        if (!err && user != null) {
            var list = user.followedList;
            UserInfo.find({'username':{ $in:list}},function(err,users) {
                var top5 = [];
                users.forEach(function(user) {
                    if (top5.length == 0) {
                        top5.push({"username":user.username,"profile":user.profilePicture,"total":user.score.total});
                    } else if (user.score.total >= top5[0].total) {
                        top5.unshift({"username":user.username,"profile":user.profilePicture,"total":user.score.total});
                    } else {
                        top5.push({"username":user.username,"profile":user.profilePicture,"total":user.score.total});
                    }
                });
                cb(top5);

            })

        }
    });
};

exports.removeFollowed = function(req, res) {
    var username = req.body.username;
    UserInfo.findOne({_id: req.cookies.userID}, function(err, user) {
        if(!err) {
            if(!user.followedList.includes(username)) {
                res.redirect("/game/friends?msg=106");
            }
            else {
                var index = user.followedList.indexOf(username);
                user.followedList.splice(index, 1);
                user.save(function(err) {
                    if (!err) {
                        res.redirect("/game/friends");
                    } else {
                        console.log(err);
                        res.redirect("/game/friends?msg=104");
                    }
                })
            }
        }
        else {
            console.log(err);
            res.redirect("/game/friends?msg=104");
        }
    });
};

exports.getUser = function(req,user) {
    UserInfo.findOne({_id: req.cookies.userID},user);
};

exports.getCharities = function(req,charities) {
    Charities.findOne({},charities);
};

exports.changeUsername = function(req, res) {
    var newUsername = req.body.newUsername;
    UserInfo.findOne({_id: req.cookies.userID}, function (err, user) {
        if (!err) {
            UserInfo.find({$or: [{username: newUsername}]}, function (err, anyuser) {
                if (!err && !anyuser.length) {
                    if (newUsername == user.username) {
                        res.redirect('/account/settings/changeusername?msg=107');
                    }
                    else {
                        user.username = newUsername;
                        user.save(function(err) {
                            if (!err) {
                                res.redirect('/account/settings/changeusername?msg=103');
                            }
                            else {
                                res.redirect('/account/settings/changeusername?msg=104');
                            }
                        });
                    }
                }
                else if (anyuser.length) {
                    res.redirect('/account/settings/changeusername?msg=108');
                }

                else {
                    res.redirect('/account/settings/changeusername?msg=104');
                }
            });
        }
        else {
            res.redirect('/account/settings/changeusername?msg=104');
        }
    });
};

exports.changeEmail = function(req, res) {
    var newEmail = req.body.newEmail;
    UserInfo.findOne({_id: req.cookies.userID}, function (err, user) {
        if (!err) {
            UserInfo.find({email: newEmail}, function (err, anyuser) {
                if (!err && !anyuser.length) {
                    if (newEmail == user.email) {
                        res.redirect('/account/settings/changeemail?msg=109');
                    }
                    else {
                        user.email = newEmail;
                        user.save(function(err) {
                            if (!err) {
                                res.redirect('/account/settings/changeemail?msg=103');
                            }
                            else {
                                res.redirect('/account/settings/changeemail?msg=104');
                            }
                        });
                    }
                }
                else if (anyuser.length) {
                    res.redirect('/account/settings/changeemail?msg=110');
                }

                else {
                    res.redirect('/account/settings/changeemail?msg=104');
                }
            });
        }
        else {
            res.redirect('/account/settings/changeemail?msg=104');
        }
    });
};