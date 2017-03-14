/**
 * Created by liuyujing on 2017/3/3.
 */

//引入mongoose的模块
var mongooseModule = require("mongoose");

//连接数据库
mongooseModule.connect("mongodb://localhost:27010/mydb");

//获取数据库连接成功的对象
var dbConnection = mongooseModule.connection;

//监听数据库连接的状态
dbConnection.on("connecting",function () {
    console.log("数据库正在连接中");
});

dbConnection.on("connected",function () {
    console.log("数据库连接成功");
});

dbConnection.on("error",function (error) {
    console.log("数据库连接错误",error);
});

module.exports = mongooseModule;

