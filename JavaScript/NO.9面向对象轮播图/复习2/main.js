/**
 * Created by liuyujing on 2016/11/10.
 */
function aa() {

}

function bb(a,b) {

}

bb(1,2);

function cc() {

    return 1;
}
// cc(); === 1


function ddd(a,b) {
    console.log(arguments.length);
    console.log(arguments.callee.length);
    console.log(arguments.callee.caller);
}


function ccc() {
    ddd(1,2,3,4);
}

ccc();

function Person(a,b,c,d,e) {
    console.log("Person",this,a,b,c);
}

function China(a,b,c,d) {
    // Person.call(this,a,b,c);
    Person.apply(this,arguments.push(d));
    console.log("China",this);
}

var xiaoMing = new China(2,44,5);

var weather = {sunny:"适中",temp:20,water:function () {
    console.log("下雨啦");
}};
console.log(weather.sunny);
weather.water();


function Animal() {
    this.nameType = "动物";
    this.run = function () {
        console.log("跑吧~");
    }
}

var dog = new Animal();
console.log(dog.nameType);
dog.run();

console.log(dog);
console.log(weather);


