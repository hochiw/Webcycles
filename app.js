var express = require('express');
var cookieParser = require('cookie-parser');
var parser = require('body-parser');
var app = express();

app.use(express.static(__dirname));
app.use(parser.urlencoded({extended:false}));
app.use(cookieParser())


app.get("/",function(req, res) {
    res.redirect("/login");
});

app.get("/home",function(req,res) {
    if (req.query.token) {
        res.sendFile(__dirname + '/site/home.html');
    }
    else {
        if (req.cookies['token']) {
            res.redirect("/home?token="+req.cookies['token']);
        } else {
            res.redirect("/login");
        }
    }
});

app.get("/logout",function(req,res) {
    res.clearCookie("token");
    res.redirect("/home");
})

app.post("/register",function(req,res) {
    var token = Buffer.from(req.body.username).toString('base64');
    res.cookie('token', token)
    res.redirect("/home?token=" + token);
})

app.post("/login", function(req,res) {
    var token = Buffer.from(req.body.username).toString('base64');
    res.cookie('token', token)
    res.redirect("/home?token=" + token);
})

app.get("/login", function(req,res) {
    res.sendFile(__dirname + '/site/login.html');
});

app.get("/account", function(req,res) {
    if (req.cookies['token']) {
        res.sendFile(__dirname + '/site/account.html');
    } else {
        res.redirect("/login");
    }
});

app.get("/account/settings", function(req,res) {
    if (req.cookies['token']) {
        res.sendFile(__dirname + '/site/settings.html');
    } else {
        res.redirect("/login");
    }
});

app.get("/account/settings/changeusername", function(req,res) {
    if (req.cookies['token']) {
        res.sendFile(__dirname + '/site/changeusername.html');
    } else {
        res.redirect("/login");
    }
});

app.get("/account/settings/changepassword", function(req,res) {
    if (req.cookies['token']) {
        res.sendFile(__dirname + '/site/changepassword.html');
    } else {
        res.redirect("/login");
    }
});

app.get("/account/settings/changeemail", function(req,res) {
    if (req.cookies['token']) {
        res.sendFile(__dirname + '/site/changeemail.html');
    } else {
        res.redirect("/login");
    }
});

app.get("/account/settings/changepostal", function(req,res) {
    if (req.cookies['token']) {
        res.sendFile(__dirname + '/site/changepostal.html');
    } else {
        res.redirect("/login");
    }
});

app.get("/game", function(req,res) {
    if (req.cookies['token']) {
        res.sendFile(__dirname + '/site/game.html');
    } else {
        res.redirect("/login");
    }
});

app.get("/game/charities", function(req,res) {
    if (req.cookies['token']) {
        res.sendFile(__dirname + '/site/charities.html');
    } else {
        res.redirect("/login");
    }
});

app.get("/game/recycling", function(req,res) {
    if (req.cookies['token']) {
        res.sendFile(__dirname + '/site/recycling.html');
    } else {
        res.redirect("/login");
    }
});

app.get("/game/playerscore", function(req,res) {
    if (req.cookies['token']) {
        res.sendFile(__dirname + '/site/playerscore.html');
    } else {
        res.redirect("/login");
    }
});

app.get("/game/friends", function(req,res) {
    if (req.cookies['token']) {
        res.sendFile(__dirname + '/site/friends.html');
    } else {
        res.redirect("/login");
    }
});

app.get("/user", function(req,res) {
    if (req.cookies['token']) {
        res.sendFile(__dirname + '/site/user.html');
    } else {
        res.redirect("/login");
    }
});

app.get("/blog", function(req,res) {
    if (req.cookies['token']) {
        res.sendFile(__dirname + '/site/blog.html');
    } else {
        res.redirect("/login");
    }
});


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`App listening to port ${ PORT }`);
});
