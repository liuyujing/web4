var express = require('express');
var router = express.Router();


var sql = require("mysql");
var connection = sql.createConnection("mysql://root@localhost/cooks");
//
// connection.connect(function (error) {
//
//     if (!error){
//         connection.query("INSERT INTO `user` (`name`, `age`, `sex`, `phone`) VALUES ('小张', '20', '0', '1111111112');",function (err,result) {
//             if (!err){
//                 console.log(result);
//                 return;
//             }
//             console.log(err);
//         });
//
//         return;
//     }
//
//     console.log(error);
//
// });




function addUser(user,callback) {

    var name = decodeURIComponent(user.userName);

    connection.connect(function (error) {
        if (!error) {
            connection.query("INSERT INTO `user` (`name`, `age`, `sex`, `phone`) VALUES ('"+name+"', '"+parseInt(user.age)+"', '"+parseInt(user.sex)+"', '"+parseInt(user.phone)+"');", function (err, result) {
            if (callback){

                if (!err){
                    callback({
                        message:"注册成功",
                        userInfo:{
                            user:name,
                            age:parseInt(user.age),
                            sex:parseInt(user.sex),
                            phone:parseInt(user.phone),
                            level:0
                        },
                        code:200
                    });
                    connection.end();
                    return;
                }
                console.log("数据库操作失败:",err);
                callback({message:"注册失败",code:300});
            }
            });
            return;
        }
        console.log("连接失败:",error);
    });
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post("/register",function (req, res) {

    console.log(req.body);

    addUser(req.body,function (result) {

        res.send({result:result});

    });


});

module.exports = router;
