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

        dbManager.searchData("SELECT * FROM `good` WHERE `page` = "+req.query.pageID+" AND `user` = "+req.query.userID+"",function (result) {
           console.log("查询点赞",result);

            //已经点过赞
            if (result.data.length>0){
                var isGood = result.data[0].isgood;

                dbManager.updateData("UPDATE `good` SET `isgood`="+!isGood+" WHERE id="+result.data[0].id+"",function (result) {

                    console.log("修改数据后的结果",result);

                    if (result.code == 200 ||result.code == 201){
                        res.send({
                            code:200,
                            message:"点赞成功",
                            data:[]
                        });
                    }else {
                        res.send({
                            code:201,
                            message:"点赞失败",
                            data:[]
                        });
                    }

                });
            }else {
                dbManager.insertData("INSERT INTO `good` (`id`, `page`, `user`, `isgood`) VALUES (NULL, '"+req.query.pageID+"', '"+req.query.userID+"', '"+req.query.isGood+"');",function (result) {

                    res.send(result);

                });
            }

        });

    }else {
        res.send({
            code:201,
            message:"请登录",
            data:[]
        });
    }

});

router.get("/searchGoods",function (req,res) {
    if (req.query.pageID){

        dbManager.searchData("SELECT * FROM `good` WHERE `page` = "+req.query.pageID+" AND `isgood` = 1",function (result) {
           console.log(result);
            res.send(result);
        });

    }else {
        res.send({
            code:201,
            message:"没有传入文章ID",
            data:[]
        });
    }
});

module.exports = router;
