var mongoose = require('mongoose');
var UserInfo = mongoose.Schema(
    {
        "username": {type: String},
        "password": {type: String},
        "email": {type: String},
        "selectedCharity": {
            type: String,
            default: null
        },
        "followedList": {
            type: [String],
            default:[]
        },
        "score": {
            "paper": {type: Number,default: 0},
            "metal": {type: Number,default: 0},
            "plastic": {type: Number,default: 0},
            "glass": {type: Number,default: 0},
            "total": {type: Number,default: 0}
        }

    }
);
mongoose.model('account',UserInfo);