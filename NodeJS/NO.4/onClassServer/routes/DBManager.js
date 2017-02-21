/**
 * Created by liuyujing on 2017/2/20.
 */


//"mysql://root@localhost/cook"
function DBManager(dbPath) {

    this.db = require("mysql");

    this.connection = this.db.createConnection(dbPath);

    this.init();
}

DBManager.prototype.init = function () {
    this.connection.connect();

    this.connection.on("error",function (error) {
        if (error){
            connection = sql.createConnection(connection.config);
            connection.connect();
        }
    });
};


DBManager.prototype.tool = function (sql,callback) {

    if (callback) {
        this.connection.query(sql, function (error, result) {

            callback(error ? {

                code: 300,
                message: "数据操作失败！"

            } : {

                code: 200,
                message: "数据操作成功！",
                data: result
            });


        });
    } else {
        console.log("没有操作之后的回调函数");
    }

};

//添加数据
DBManager.prototype.insertData = function (sql,callback) {
    this.tool(sql,callback);
};

//查询数据
DBManager.prototype.searchData = function (sql,callback) {
    this.tool(sql,callback);
};

exports.DBManager = DBManager;

