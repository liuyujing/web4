/**
 * Created by liuyujing on 2017/3/3.
 */

var mongoose = require("./mongodbManager");
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    id:{
        type:Number,
        unique:true
    },
    name:{
        type:String,
        unique:true
    }
});


var User = mongoose.model("User",UserSchema);

module.exports = User;