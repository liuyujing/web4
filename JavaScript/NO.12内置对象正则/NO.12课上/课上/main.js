/**
 * Created by liuyujing on 2016/11/15.
 */

(function () {

    //正则对象创建的两种方式
    // var reg = new RegExp("[1]","i");
    // var reg = /[1]/i;

    // "r3242tr234rr"
//    属性
//    g : 全局匹配  不再只匹配第一个后 就不再继续查找 match replace
//    i : 在匹配的时候  忽略大小写

    var input = document.getElementById("input");
    //获得焦点 触发的事件
    input.onfocus = function () {
        input.value = "";
    };
    //失去焦点触发的事件
    input.onblur = function () {
        console.log(input.value);


        //校验 字符串 是否是 以字母a开头
        //RegExp -> test -> boolean
        var reg = /^a/;
        console.log(reg.test(input.value));

    //    判断字符串 是以什么结尾
        reg = /ab$/;
        console.log(reg.test(input.value));

        // \b 判断边界 以什么开始  以什么结束 （会忽略掉 空格 换行符）
        reg = /\ba/;
        console.log(reg.test(input.value));
        reg = /a\b/;
        console.log(reg.test(input.value));

    //    匹配任意字符 .
    //    至少输入的次数 {5}
        reg = /.{5}/;
        console.log(reg.test(input.value));

    //    输入的字符串 必须是大写
        reg = /[A-Z]/;
        console.log(reg.test(input.value));

    //    忽略大小写 i
        reg = /^Ab/i;
        console.log(reg.test(input.value));
    //    全局匹配 g 查找到底一个后 会继续查找 replace match
        reg = /ab/g;
        input.value = input.value.replace(reg,"#");
        console.log(input.value.match(reg));


    //    校验 输入的字符 是不是 小写
        reg = /[a-z]/;
        console.log(reg.test(input.value));

    //    校验输入的是不是 数字
        reg = /[0-9]/;
        console.log(reg.test(input.value));

    //    校验 输入的字符 是不是   大写小写的字母
        reg = /[A-z]/;
        console.log(reg.test(input.value));

        //只要是 []阔起来的  全部都是 或者
        //[ab] 只要有a 或b 就是校验成功的
        // /ab/ 必须是ab
        reg = /[ab]/;
        console.log(reg.test(input.value));

    //    校验 字符串中 是否包含 某些字符串
        reg = /(abc|bcd|eee)/;
        console.log(reg.test(input.value));

    //    校验 字符串中 是不是 不包含某些指定字符(连续的)
        reg = /[^vnm]/;
        console.log(reg.test(input.value));


    //    1.校验输入的内容 是不是 以大写字母开头的
    //    2.校验输入的内容 是不是以大写字母开头 并且至少有三个不约束大小写字母
        reg = /^[A-Z]/;
        console.log(reg.test(input.value));

        reg = /^[A-Z][A-z]{3}/;
        console.log(reg.test(input.value));
    //    3.校验输入的内容 是 11位的数字
        reg = /^[0-9]{11}$/;
        console.log(reg.test(input.value));

        // "\"\"" 转义符

    //    查找某个字符串 前面的一个字符
    //    某个字符的后面 必须是vv
        reg = /.vv/;
        console.log(input.value.match(reg));
        reg = /vv./;
        console.log(input.value.match(reg));

    //    查找单词字符 A-z 0-9
        reg = /\w/;
        console.log(reg.test(input.value));

    //    查找非单词字符
        reg = /\W/;
        console.log(reg.test(input.value));

    //    校验 是不是 数字
        reg = /\d/;
        console.log(reg.test(input.value));

    //    校验是不是 非数字
        reg = /\D/;
        console.log(reg.test(input.value));

    //    校验是不是空白字符
        reg = /\s/;
        console.log(input.value.replace(reg,"?"));
    //    校验是不是非空白字符
        reg = /\S/;
        console.log(input.value.match(reg));

    //    校验 某个字符串  是否 不在边界
    //    只要开头 不是 ttt 就是正确的
        reg = /\Bttt/;
        console.log(reg.test(input.value));

    //    量词
    //    f的后面至少跟 一个g
        reg = /fg+/;
        console.log(reg.test(input.value));

        reg = /fg*/;
        reg = /fg?/;

        //某个字符后面 必须是{3,5} 3到5位
        reg = /^[a-z]{3,5}$/;
        console.log(reg.test(input.value));
        console.log(reg.exec(input.value));





    //    开头数字
        reg = /^[0-9]/;
        reg = /^\d/;

    //  以cn com org 结束
        reg = /(cn|com|org)$/;

    //  26个英文字母的小写组成
        reg = /[a-z]/;

    //    只能输入数字和英文
        reg = /\w/;

    //  只能大写字母开头 必须由字母数字组成
        reg = /^[A-Z][A-z][0-9]/;

    //    校验用户名：只能输入3-10个以以大写字母开头 必须由字母数字组成
        reg = /^[A-Z][A-z][0-9]{2,9}$/;

    //    只能输入6-15个非特殊字符
        reg = /^[A-z][0-9]{6,15}$/;

    //    手机号
    //     1 (3 5 4 6 7 8 9 )(shuzi)9
        reg = /^1[3-9][0-9]{9}$/;
        console.log(reg.test(input.value));

    //    邮箱
    //     yujing@ucai.cn
        reg = /^[A-z]|[0-9]{3}@([a-z]|[0-9])+.[a-z]{2}$/;
        console.log(reg.test(input.value));

    };


    function RegExpTool() {

    }
    RegExpTool.isEmail = function (str) {
        var reg = /^[A-z]|[0-9]{3}@([a-z]|[0-9])+.[a-z]{2}$/;
        return reg.test(str);
    };

    RegExpTool.isPassword = function (str) {
        var reg = /\w/;
        return reg.test(str);
    };

    RegExpTool.isPhoneNum = function (str) {
        var reg = /^1[3-9][0-9]{9}$/;
        return reg.test(str);
    };

    var result = RegExpTool.isEmail("yujing@ucai.cn");
    console.log(result);

})();
