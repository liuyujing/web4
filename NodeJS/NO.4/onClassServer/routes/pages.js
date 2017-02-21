/**
 * Created by liuyujing on 2017/2/21.
 */

var express = require('express');
var router = express.Router();

var dbManagerMoudle = require("./DBManager");
var dbManager = new dbManagerMoudle.DBManager("mysql://root@localhost/cook");

router.get("/goods",function (req,res) {

    dbManager.searchData("SELECT * FROM `good` WHERE `page` = 100 AND `isgood` = 1",function (result) {
       res.send(result);
    });

});

module.exports = router;
