/**
 * Created by liuyujing on 2016/11/8.
 */
(function(){

    //通过字面量创建对象
    var xiaoMing = {
        name: "小明",
        age: 20,
        move: function () {
            alert("");
        }
    };
//    获取对象中的值 可以通过.来取值
    console.log(xiaoMing.name,xiaoMing.age);
    xiaoMing.move();

    var list = [{city:"xx",id:"xxxx",lat:"",lon:""},{city:"xx",id:"xxxx",lat:"",lon:""}];
    // list[0].city
    // list[1].id

    // function PP() {
    //     return {};
    // }


    function aaa() {
        //是window调用的  -> 表示window
        console.log(this);
    }

    aaa();

    //构造函数 constructor
    function Person(_name,_move) {
        //this 通过Person创建出来的对象
        this.name = _name;

        this.move = _move;
    }

    var xiaoHong = new Person("小红");
    console.log(xiaoHong.name);

    var xiaoLi = new Person("小李");

    var xiaoZhang = new Person("小张",function () {
        console.log("移动");
    });
    xiaoZhang.move();

/*
    // var Hero = function (_blood,_name,_att) {
    var Hero = function (_blood,_name) {
        this.blood = _blood;
        this.name = _name;
        this.att = function (monster) {
            monster.blood -= 100;
        };
    };

    var Monster = function (_blood) {
        this.blood = _blood;
    };

    // function att(monster) {
    //
    // }
    // var niuTou = new Hero(1000,"牛头",function (monster) {
    //
    // });



    var niuTou = new Hero(1000,"牛头");
    var daNiu = new Monster(900);

    // while (daNiu.blood>=0){
    //     niuTou.att(daNiu);
    // }
    niuTou.att(daNiu);

    console.log(daNiu.blood);
*/

    var Weapon = function (_name,_power,_level) {
        this.name = _name;
        this.power = _power;
        this.level = _level;
    };

    var Hero = function (_blood,_name) {
        this.blood = _blood;
        this.name = _name;
        this.weapon = new Weapon("破木棍",10,0);
        this.att = function (monster) {
            monster.blood -= (100+this.weapon.power);
        };
    };

    var Monster = function (_blood) {
        this.blood = _blood;
    };

    /*
    var niuTou = new Hero(1000,"牛头");
    var daNiu = new Monster(900);

    // niuTou.att(daNiu);

    // console.log(niuTou.weapon.name);

    var daMuGun = new Weapon("大木棍",300,999);
    niuTou.weapon = daMuGun;
    niuTou.att(daNiu);
    console.log(niuTou.weapon.name);
    console.log(daNiu.blood);

    */


    var list = {hero:[{blood:1000,name:"牛头"},{blood:2000,name:"牛头2"},{blood:1000,name:"牛头"},{blood:2000,name:"牛头2"},{blood:1000,name:"牛头"},{blood:2000,name:"牛头2"},{blood:1000,name:"牛头"},{blood:2000,name:"牛头2"},{blood:1000,name:"牛头"},{blood:2000,name:"牛头2"}],weapon:[{power:10,name:"破木棍",levle:0},{power:15,name:"破大木棍",levle:10}],monster:[]};

    for (var i=0;i<list.hero.length;i++){
        var hero = new Hero(list.hero[i].blood,list.hero[i].name);
        console.log("您可以选择血量是",hero.blood,"的",hero.name);
    }

/*
    function Person() {
        this.name = "孩子";
    }

    var xiao = new Person();

    var xx = {};
*/

//1.字面量的方式创建
    var p = {name:"xxx",age:20};
//2.通过构造器去创建
    function 首字母大写() {

    }
    var xx = new 首字母大写();
//获得对象中的 值
//     对象名.属性名/函数名;

//    this:调用者

//    把找色块 改成 使用面向对象 方式 实现


})();
