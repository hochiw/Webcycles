var express = require('express');
var app = express();

app.use(express.static(__dirname));
app.use(express.static(__dirname + "/css"));
app.use(express.static(__dirname + "/css/font"));

app.get("/",function(req, res) {
        res.sendFile(__dirname + '/index.html');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`App listening to port ${ PORT }`);
});
