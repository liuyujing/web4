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

        dbManager.searchData("SELECT * FROM `good` WHERE `goodPageID` = "+req.query.pageID+" AND `goodUserID` = "+req.query.userID+"",function (result) {
           console.log("查询点赞",result);

            //已经点过赞
            if (result.data.length>0){
                var isGood = result.data[0].isgood;

                dbManager.updateData("UPDATE `good` SET `isgood`="+!isGood+" WHERE id="+result.data[0].id+"",function (result) {

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
                dbManager.insertData("INSERT INTO `good` (`goodID`, `goodPageID`, `goodUserID`, `isgood`) VALUES (NULL, '"+req.query.pageID+"', '"+req.query.userID+"', '"+req.query.isGood+"');",function (result) {

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

        dbManager.searchData("SELECT * FROM `good` WHERE `goodPageID` = "+req.query.pageID+" AND `isgood` = 1",function (result) {
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

router.post("/comment",function (req,res) {

    //判断用户 是否登录
    if (req.body.userID){

                dbManager.insertData("INSERT INTO `comment` (`commentID`, `commentpageID`, `commentuserID`, `commentDate`, `commentContent`) VALUES (NULL, '"+req.body.pageID+"', '"+req.body.userID+"', CURRENT_TIMESTAMP, '"+req.body.content+"');",function (result) {

            res.send(result);

        });

    }else {
        res.send({
            code:201,
            message:"未登录不可评论！",
            data:[]
        });
    }

});

router.get("/cooks",function (req,res) {

    dbManager.searchData("SELECT * FROM cookPage LEFT JOIN user ON cookPage.cookPageUser = user.id LEFT JOIN good ON cookPage.cookPageID = good.goodPageID LEFT JOIN comment ON cookPage.cookPageID = comment.commentPageID",function (result) {

        if (result.data.length){

            var cooks = [];

            //获取所有菜谱的信息
            var cook = {};
            for (var i = 0;i<result.data.length;i++){

                if(cook["id"] == result.data[i].cookPageID){
                    continue;
                }
                //如果 不再次 实例化cook对象  就会被 修改
                cook = {};
                cook.id = result.data[i].cookPageID;
                cook.title = result.data[i].cookPageTitle;
                cook.des = result.data[i].cookPageDes;
                cook.images = result.data[i].cookPageImages;

                //发布文章的用户信息
                var user = {};
                user.id = result.data[i].user;
                user.date = result.data[i].date;
                user.username = result.data[i].username;
                user.birthday = result.data[i].birthday;
                user.sex = result.data[i].sex;

                cook["userInfo"] = user;

                cooks.push(cook);
            }

            for (var i=0;i<cooks.length;i++){
                //点赞的数组
                var goods = [];
                for (var j=0;j<result.data.length;j++){
                    if (result.data[j].isgood == 1 && result.data[j].id == cooks[i].id){

                        goods.push("{isgood:"+result.data[j].isgood+",cookPageInfo:"+cook[i]+",userID:"+user+"}");

                    }
                }

                cook["goods"] = goods;
            }



            for (var i=0;i<cooks.length;i++){

                var comments = [];
                for (var j = 0;j<result.data.length;j++){
                    if (result.data[j].content && cooks[i].id == result.data[j].id){
                        comments.push("{date:"+result.data[j].date+",pageInfo:"+cooks[i]+",userID:"+result.data[j].userID+",content:"+result.data[j].comment+"}");
                    }

                }

                cooks[i].comments = comments;

            }

            console.log(cooks);
            res.send({
                code:200,
                message:"查询成功",
                data:cooks
            });
        }else {
            res.send({
                code:200,
                message:"没有相关内容",
                data:[]
            });
        }
    });
});

//关注
router.get("/follow",function (req,res) {
//    1.用户ID
//    2.作者的ID

    dbManager.searchData("SELECT * FROM `follow` WHERE `authorID` = "+req.query.authorID+" AND `curUserId` = "+req.query.userID+"",function (result) {

        console.log("关注：",result);

        if (result.data.length>0){

            var floowID = result.data[0].followID;
            var isFollow = result.data[0].isFollow;

            dbManager.updateData("UPDATE `follow` SET isFollow="+!isFollow+" WHERE followID="+floowID+"",function (result) {
                console.log(result);
                if (result.code == 200){
                    res.send({
                        code:200,
                        message:"操作成功",
                        data:[]
                    });
                }else {
                    res.send({
                        code:201,
                        message:"操作失败",
                        data:[]
                    });
                }
            });
        }else {
            upFollow(1);
        }

    });

    function upFollow(isFollw) {
        dbManager.insertData("INSERT INTO `follow` (`followID`, `authorID`, `curUserId`, `isFollow`) VALUES (NULL, '"+req.query.authorID+"', '"+req.query.userID+"', '1');",function (result) {

        });
    }
});

router.get("/getFollowCookPages",function (req,res) {

    dbManager.searchData("SELECT * FROM cookPage LEFT JOIN follow ON cookPage.cookPageUser = follow.authorID LEFT JOIN user ON follow.curUserId = user.id WHERE follow.isFollow = 1 AND user.id = "+req.query.userID+"",function (result) {
       console.log(result);
    });

});

router.get("/getCooksForType",function (req,res) {

    var sql = "";
    switch (req.query.type){
        case "0":
            sql = "SELECT * FROM cookPage LEFT JOIN follow ON cookPage.cookPageUser = follow.authorID LEFT JOIN user ON follow.curUserId = user.id WHERE follow.isFollow = 1 AND user.id = "+req.query.userID+" LIMIT "+req.query.beginIndex+","+req.query.endIndex+"";
            break;
        case "1":
            sql = "SELECT * FROM cookPage LEFT JOIN user ON cookPage.cookPageUser = user.id LEFT JOIN good ON cookPage.cookPageID = good.goodPageID LEFT JOIN comment ON cookPage.cookPageID = comment.commentPageID LIMIT "+req.query.beginIndex+","+req.query.endIndex+"";
            break;
        case "2":
            sql = "SELECT * FROM cookPage LEFT JOIN user ON cookPage.cookPageUser = user.id LEFT JOIN good ON cookPage.cookPageID = good.goodPageID LEFT JOIN comment ON cookPage.cookPageID = comment.commentPageID LIMIT 0,10";
            break;
        default:
            sql = "SELECT * FROM cookPage LEFT JOIN user ON cookPage.cookPageUser = user.id LEFT JOIN good ON cookPage.cookPageID = good.goodPageID LEFT JOIN comment ON cookPage.cookPageID = comment.commentPageID LIMIT "+req.query.beginIndex+","+req.query.endIndex+"";
    }

    console.log(sql);

    dbManager.searchData(sql,function (result) {
        console.log(sql);
        console.log(result);

        if (result.data.length){

            var cooks = [];

            //获取所有菜谱的信息
            var cook = {};
            for (var i = 0;i<result.data.length;i++){

                if(cook["id"] == result.data[i].cookPageID){
                    continue;
                }
                //如果 不再次 实例化cook对象  就会被 修改
                cook = {};
                cook.id = result.data[i].cookPageID;
                cook.title = result.data[i].cookPageTitle;
                cook.des = result.data[i].cookPageDes;
                cook.images = result.data[i].cookPageImages;

                //发布文章的用户信息
                var user = {};
                user.id = result.data[i].user;
                user.date = result.data[i].date;
                user.username = result.data[i].username;
                user.birthday = result.data[i].birthday;
                user.sex = result.data[i].sex;

                cook["userInfo"] = user;

                cooks.push(cook);
            }

            for (var i=0;i<cooks.length;i++){
                //点赞的数组
                var goods = [];
                for (var j=0;j<result.data.length;j++){
                    if (result.data[j].isgood == 1 && result.data[j].id == cooks[i].id){

                        goods.push("{isgood:"+result.data[j].isgood+",cookPageInfo:"+cook[i]+",userID:"+user+"}");

                    }
                }

                cook["goods"] = goods;
            }

            for (var i=0;i<cooks.length;i++){

                var comments = [];
                for (var j = 0;j<result.data.length;j++){
                    if (result.data[j].content && cooks[i].id == result.data[j].id){
                        comments.push("{date:"+result.data[j].date+",pageInfo:"+cooks[i]+",userID:"+result.data[j].userID+",content:"+result.data[j].comment+"}");
                    }

                }

                cooks[i].comments = comments;

            }

            console.log(cooks);
            res.send({
                code:200,
                message:"查询成功",
                data:cooks
            });
        }else {
            res.send({
                code:200,
                message:"没有相关内容",
                data:[]
            });
        }
    });
});

module.exports = router;
