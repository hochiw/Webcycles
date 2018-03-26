var express = require('express');
var db = require("./models/db.js");
var app = express();

app.use(express.static(__dirname));
app.use(express.static(__dirname + "/css"));
app.use(express.static(__dirname + "/css/font"));

app.get("/",function(req, res) {
        res.sendFile(__dirname + '/index.html');
});

app.listen('3000');