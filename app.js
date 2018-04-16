var express = require('express');
var cookieParser = require('cookie-parser');
var parser = require('body-parser');
var app = express();

app.use(express.static(__dirname));
app.use(parser.urlencoded({extended:false}));
app.use(cookieParser())


app.get("/",function(req, res) {
    res.sendFile(__dirname + '/site/index.html');
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

app.post("/login", function(req,res) {
    var token = Buffer.from(req.body.username).toString('base64');
    res.cookie('token', token)
    res.redirect("/home?token=" + token);
})

app.get("/login", function(req,res) {
    if (req.cookies['token']) {
        res.redirect("/home?token=" + req.cookies['token'])
    } else {
        res.sendFile(__dirname + '/site/login.html');
    }

});

app.get("/settings", function(req,res) {
    if (req.cookies['token']) {
        res.sendFile(__dirname + '/site/settings.html');
    } else {
        res.redirect("/login");
    }
});

app.get("/settings/changeusername", function(req,res) {
    if (req.cookies['token']) {
        res.sendFile(__dirname + '/site/changeusername.html');
    } else {
        res.redirect("/login");
    }
});

app.get("/settings/changepassword", function(req,res) {
    if (req.cookies['token']) {
        res.sendFile(__dirname + '/site/changepassword.html');
    } else {
        res.redirect("/login");
    }
});

app.get("/settings/changeemail", function(req,res) {
    if (req.cookies['token']) {
        res.sendFile(__dirname + '/site/changeemail.html');
    } else {
        res.redirect("/login");
    }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`App listening to port ${ PORT }`);
});
