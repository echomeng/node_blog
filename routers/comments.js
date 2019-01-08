const express = require('express');
const router = express.Router();
const checkLogin = require('../middlewares/check').checkLogin;

router.post('/', checkLogin, function(req,res,next){
    res.send('发布留言');
});
router.get('/:comments/:commentId/remove', checkLogin, function(req, res, next){
    res.send('删除留言');
});

module.exports = router;