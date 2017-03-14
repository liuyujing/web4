/**
 * Created by liuyujing on 2017/3/3.
 */


function Manager() {}

Manager.prototype.insertData = function (InsertType,info,callback) {
    var modelInfo = new InsertType(info);
    modelInfo.save(function (error,res) {
        callback(error,res);
    });
};

Manager.prototype.update = function (Type,where,updateInfo,callback) {
    Type.update(where,updateInfo,function (err, numberAffected, raw) {
        //numberAffected:更新之后的值
        //raw:更新之前的值
        callback(err, numberAffected, raw);
    });
};


Manager.prototype.searh = function (Type,searchData,callback) {
    Type.find(searchData,function (error,res) {
        callback(error,res);
    });
};


// Manager.prototype.insertUser = function (userInfo,callback) {
//
//     var user = new UserModel(userInfo);
//
//     user.save(function (error,res) {
//         callback(error,res);
//     });
// };

module.exports = Manager;