/**
 * Created by liuyujing on 2016/12/13.
 */

(function () {

    function init() {

        //创建音频上下文的对象
        var context = new AudioContext();

        var control = document.querySelector(".control");
        control.onclick = function () {
            loadAudio("丑八怪.mp3",function (arraybuffer) {
                //创建 音频缓冲区资源的对象
                //播放 处理(效果器的连接) 音频
                var source = context.createBufferSource();
                /*
                * 解码 音频数据
                *
                * arraybuffer
                * 解码之后的回调函数
                * */
                context.decodeAudioData(arraybuffer,function (buffer) {

                //    设置 缓冲区的buffer
                    source.buffer = buffer;


                //    连线到  输出节点
                //     source.connect(context.destination);
                //    创建 生相的节点
                //     var pannerNode = panner(context);

                    // pannerNode.pan.value = -1;
                    //把输入端口 连接 生相节点
                    // source.connect(pannerNode);

                //    把生相节点 连接到  destination
                //     pannerNode.connect(context.destination);
                //     var gainNode = gain(context);
                //     gainNode.gain.value = 10;
                //
                //     pannerNode.connect(gainNode);
                //
                //     gainNode.connect(context.destination);

                    var convolverNode = convolver(context);
                    convolverNode.buffer = buffer;

                    source.connect(convolverNode);

                    convolverNode.connect(context.destination);

                //    开始播放
                    source.start();
                });

            });
        };

    }

    // 回旋混响 效果器
    function convolver(context) {
        return context.createConvolver();
    }

    //创建增益效果器
    function gain(context) {
        return context.createGain();
    }


    //创建 生相的效果器  左右声道
    function panner(context) {

        return context.createStereoPanner();
    }

    function loadAudio(url,callback) {

        var request = new XMLHttpRequest();
        request.open("GET",url,true);
        request.responseType = "arraybuffer";
        request.onload = function () {

            if (callback){
                callback(request.response);
            }

        };
        request.send();

    }

    init();

})();
