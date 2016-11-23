/**
 * Created by liuyujing on 2016/11/15.
 */
(function () {

    var input = document.getElementById("input");
    input.onfocus = function () {
        input.value = "";
    };
    input.onblur = function () {
        console.log(input.value);

        var reg = /^a/i;
        console.log(reg.test(input.value));

        reg = /2$/g;
        console.log(reg.test(input.value));

        reg = /2/g;
        console.log(reg.exec(input.value));
        console.log(input.value.match(reg));
        // input.value = input.value.replace(reg,"#");
        console.log(input.value.search(reg));

        reg = /^.{5}$/;
        console.log(reg.test(input.value));

        reg = /[^a]/g;
        console.log(input.value.match(reg));

        reg = /[af]/g;
        console.log(input.value.match(reg));

        reg = /[0-9]/g;
        console.log(input.value.match(reg));

        reg = /[A-z]/g;
        console.log(input.value.match(reg));

        reg = /.牛掰/g;
        console.log(".",input.value.match(reg));

        reg = /\w/g;
        console.log(input.value.match(reg));

        reg = /\W/g;
        console.log(input.value.match(reg));

        reg = /\D/g;
        console.log(input.value.match(reg));

        reg = /\s/g;
        console.log(input.value.match(reg));

        reg = /汉字\B/g;
        console.log(reg.test(input.value));

        reg = /\t/g;
        console.log(input.value.match(reg));

        reg = /qy+/g;
        console.log(input.value.match(reg));

        reg = /qy*/g;
        console.log(input.value.match(reg));

        reg = /y{2,4}/g;
        console.log(input.value.match(reg));

        reg = /y{2,}/g;
        console.log(input.value.match(reg));

        reg = /(he?)/g;
        console.log(input.value.match(reg));

        reg = /^[A-z]/;
        console.log(reg.test(input.value));

        reg = /^[0-9]/;
        console.log(reg.test(input.value));

        reg = /(cn|com|org)$/;
        console.log(reg.test(input.value));

        reg = /(cn|com|org)\b/;
        console.log(reg.test(input.value));

        reg = /^\d{11}$/;
        console.log(reg.test(input.value));

        reg = /^[A-Z][A-z]\d+/;
        console.log("tt",reg.test(input.value));

        reg = /^1[3-8]+\d{9}$/;
        console.log(reg.test(input.value));

        reg = /^\D+[0-9]?@\w+.\D{2,}$/;
        console.log("mm",reg.test(input.value));
    };



})();
