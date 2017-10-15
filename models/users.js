const User = require('../lib/mongo').User;
const Post = require('../lib/mongo').Post;

module.exports = {
    // 注册一个用户
    create: function create(user) {
        return User.create(user).exec();
    },

    // 通过用户名获取用户信息
    getUserByName: function getUserByName(name) {
        return User.findOne({ name: name }).addCreatedAt().exec();
    },

    getUserIdByName: function getUserIdByName(name) {
        return User.findOne({ name: name }).addCreatedAt().exec()
            .then(function(user) {
                return user;
            })
    }

};
