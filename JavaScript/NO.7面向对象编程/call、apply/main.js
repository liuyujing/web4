/**
 * Created by liuyujing on 2016/11/8.
 */
(function () {

    function mmm(a,b,c) {
        console.log(arguments);
    }

    function vvv(a,b) {
        // mmm.call(this,a,b,40);
        // mmm.apply(this,arguments);
    }

    vvv(10,20,30,40);



    function aaa(a,b,c) {
        console.log(arguments.length);//得到实参的数量
        console.log(arguments.callee.length);//获得形参的数量

        console.log(arguments.callee.caller);//可以得到调用本函数的  是哪一个函数

        if (arguments.callee.caller == bbb){
            alert("");
        }
    }
    
    function bbb() {
        aaa(1,4,6,8,10,40);
    }

    function ccc() {
        aaa(1,4,6,8,10,40);
    }
    ccc();
    // bbb();
})();