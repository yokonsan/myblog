const express = require('express');
const router = express.Router();

const UserModel = require('../models/users');
const PostModel = require('../models/posts');
const CommentModel = require('../models/comments');
const checkLogin = require('../middlewares/check').checkLogin;

// user page
router.get('/:user', function(req, res, next) {
    var user = req.params.user;
    // var user = UserModel.getUserByName(userName).then(function(user){
    //     return user._id
    // });
    // var userId = UserModel.getUserIdByName(userName);
    // console.log(userId)
    
    Promise.all([
        // // 用户
        // UserModel.getUserByName(user),
        // 文章信息
        PostModel.getPosts(user)
    ])
    .then(function(result) {
        // var user = result[0];
        var posts = result[0];

        if (!user) {
            throw new Error('没有此用户');
        }

        res.render('user', {
            // user: user,
            posts: posts
        })
    })
    .catch(next);

    
});

module.exports = router;
