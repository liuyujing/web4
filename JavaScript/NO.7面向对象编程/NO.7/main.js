/**
 * Created by liuyujing on 2016/11/8.
 */

function mm(a) {
    console.log(arguments.callee.caller);
}

function vv() {
    mm(1,2);
}
vv();

var xiaoMing = {
    name:"小明",
    age:20,
    run:function () {
        console.log("run");
    }
};


xiaoMing.run();

console.log("run" in xiaoMing);
console.log(xiaoMing.hasOwnProperty("run"));


function Person(_name) {
    this.name = _name;
}
Person.prototype.age = 0;

var x = new Person("234");
x.age = 30;
console.log(x.hasOwnProperty("age"));
console.log("name" in x);
console.log(Person.prototype);


