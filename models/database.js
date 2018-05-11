var mongoose = require('mongoose');

// use "heroku local" to run the application or change the value
var db_url = process.env.dburl; // database url
var db_account = process.env.dbac; // database account
var db_password= process.env.dbpw; // database password
var url = 'mongodb://'+db_account+':'+db_password+'@'+ db_url + db_account;

mongoose.connect(url,function(err) {
    console.log(process.env.dbpw)
    if (err) {
        console.log("Error: Unable to connect to the database")
    } else {
        console.log("Successfully connected to the database")
    }
});

require('./user.js');
require('./charities.js');