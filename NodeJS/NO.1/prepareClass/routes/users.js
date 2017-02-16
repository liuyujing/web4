var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


var sql = require("mysql");
var connection = sql.createConnection("mysql://root:@localhost/cook");

connection.connect(function (error) {
    console.log(error);
    // connection.query("SELECT * FROM user",function (error ,results ,fields) {
    //     console.log(error ,results ,fields);
    // });
});



function adduser(callback) {
    connection.connect(function () {
        connection.query("INSERT INTO `user`(`id`, `name`, `sex`, `age`) VALUES (003,'xiaomao',0,26)",function (error ,results ,fields) {
            console.log(error ,results ,fields);
            callback(results);
        });
    });
}

adduser(function (r) {
   console.log(r);
});
router.post("/regsiter",function (req,res) {
    // adduser(function (result) {
    //     res.send(result);
    // });

});

module.exports = router;
