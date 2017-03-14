/**
 * Created by liuyujing on 2017/3/3.
 */

var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27010/news");
var db = mongoose.connection;
db
    .on("connected",function () {
    console.log("数据库已连接上");
})
    .on("error",function (error) {
        console.log("数据库连接错误",error);
    })
    .on("disconnected",function () {
        console.log("数据库已断开");
    });
module.exports = mongoose;