var mongoose = require('mongoose');
var Charities = mongoose.Schema(
    {
        "theme":{type:String,default:null},
        "charities":[{
            "name": {type: String,default:null},
            "descrip": {type: String,default:null},
            "totalPoints": {type: Number, default: 0},
            "avatar": {type:String,default:null}
        }]
    }
);
mongoose.model('charities',Charities);