/**
 * Created by liuyujing on 2017/2/21.
 */

var express = require('express');
var router = express.Router();

var dbManagerMoudle = require("./DBManager");
var dbManager = new dbManagerMoudle.DBManager("mysql://root@localhost/cook");


router.get("/getCook",function (req,res) {
    dbManager.searchData("SELECT * FROM cookPage",function (result) {
       console.log(result);

        if (result.data.length>0){
            res.send(result);

        }else {
            res.send({
                code:201,
                message:"没有数据",
                data:[]
            });
        }

    });
});

//点赞
//1.文章的id
//2.点赞用户的id
router.get("/good",function (req,res) {

    console.log(req.query);
    if (req.query.pageID.length>0&&req.query.userID.length){

        console.log("INSERT INTO `good` (`id`, `page`, `user`, `isgood`) VALUES (NULL, '"+req.query.pageID+"', '"+req.query.userID+"', '"+req.query.isGood+"');");

        dbManager.insertData("INSERT INTO `good` (`id`, `page`, `user`, `isgood`) VALUES (NULL, '"+req.query.pageID+"', '"+req.query.userID+"', '"+req.query.isGood+"');",function (result) {
           res.send(result);
        });

    }else {
        res.send({
            code:201,
            message:"请登录",
            data:[]
        });
    }

});

module.exports = router;
