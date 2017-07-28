var express = require('express');//调用express模块
var router = express.Router();//调用express模块的Router方法

router.get('/',function(req,res,next){
    res.render('register');
})
module.exports = router;