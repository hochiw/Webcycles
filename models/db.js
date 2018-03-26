var faker = require('faker');

var exports = module.exports = {};

exports.getRandomList= function() {
    result = [];
    for (var i = 0;i < 15;i++) {
        var name = {
            name : faker.name.findName(),
            id : i
        }
        result.push(name);
    }
    return result;
};
