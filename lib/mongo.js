const config = require('../config/default');
const Mongolass = require('mongolass');
const mongolass = new Mongolass();
mongolass.connect(config.mongodb);

exports.User = mongolass.model('User',{
    name: {type: 'string', require: true},
    password: {type: 'string', require: true},
    avatar: {type: 'string', require: true},
    gender: {type:'string', enum: ['m','f','x'], default:'x'},
    bio: {type: 'string', require: true}
});
exports.User.index({name: 1}, {unique: true}).exec(); // 用户名全局唯一