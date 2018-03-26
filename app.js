var express = require('express');
var db = require("./models/db.js");
var app = express();

app.get("/",function(req, res) {
        res.send("Coming soon");
});

app.listen('3000');