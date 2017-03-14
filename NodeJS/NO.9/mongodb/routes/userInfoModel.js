/**
 * Created by liuyujing on 2017/3/3.
 */

var mongoose = require("./mongoose");

var userSchema = mongoose.Schema({
    id:{
        type:Number,
        unique:true
    },
    name:{
        type:String,
        unique:true
    }
});

var User = mongoose.model("User",userSchema);

module.exports = User;
