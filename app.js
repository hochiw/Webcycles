var express = require('express');
var app = express();

app.use(express.static(__dirname));

app.get("/",function(req, res) {
        res.sendFile(__dirname + '/site/index.html');
});

app.get("/home",function(req,res) {
    res.sendFile(__dirname + '/site/home.html');
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`App listening to port ${ PORT }`);
});
