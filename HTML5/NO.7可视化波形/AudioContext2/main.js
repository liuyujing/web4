/**
 * Created by liuyujing on 2016/12/14.
 */
(function () {

    //创建音频上下文 通过AudioContext
    var audioContext = new AudioContext();
    // 通过 音频上下文的对象  创建一个 资源缓冲区的对象
    var bufferSource = audioContext.createBufferSource();


    function init() {

        player("丑八怪.mp3");

        var button = document.querySelector(".control");

        button.onclick = function () {
            play();
        };
    }


    function player(url) {

        loadAudio(url,function (arraybuffer) {

            //通过音频上下文 解码 arraybuffer 数据
            //在回调函数中 得到 解码之后的数据
            audioContext.decodeAudioData(arraybuffer,function (buffer) {

                //得到  解码之后 的数据
                //设置  资源缓冲区的  buffer
                //等同于 设置输入口（input）
                bufferSource.buffer = buffer;

                //连线  连接到  音频上下文的  出口(output)
                // bufferSource.connect(audioContext.destination);

                /*
                var compNode = compressorEffect();

                //输入口 连接 效果器
                bufferSource.connect(compNode);

            //    效果器 连接 输出口
                compNode.connect(audioContext.destination);
                */

                /*
                var distortion = distortionEffect();

                bufferSource.connect(distortion);

                distortion.connect(audioContext.destination);
                */


                // var oscillator = audioContext.createOscillator();
                //
                // oscillator.type = 'square';
                // oscillator.frequency.value = 3000; // value in hertz
                // oscillator.connect(audioContext.destination);
                // oscillator.start();



                // var filter = audioFilterEffect();
                // bufferSource.connect(filter);
                // filter.connect(audioContext.destination);


            //    截获音频数据
                var analyserNode = anglyser();
                bufferSource.connect(analyserNode);
                analyserNode.connect(audioContext.destination);

                reloadAnalyserData(analyserNode);
            });
        });
    }
    
    
    function reloadAnalyserData(analyser) {
        var array = new Uint8Array(analyser.frequencyBinCount);
        //把获得到的数据 存到数组中
        analyser.getByteTimeDomainData(array);

        console.log(array);

        requestAnimationFrame(function () {
            reloadAnalyserData(analyser);
        });
    }

    function play() {

        if (bufferSource){

            //开始 使用 资源缓冲区对象 里面的数据
            bufferSource.start();

        }
    }

    function loadAudio(url,callback) {

        var request = new XMLHttpRequest();

        //需要设置  responseType 是 arraybuffer类型
        request.responseType = "arraybuffer";

        request.open("GET",url);

        request.onload = function () {

            if (callback){
                callback(request.response);
            }
        };

        request.send();

    }


    //压缩效果器
    function compressorEffect() {

    //    根据音频上下文 创建  效果器
        var compressorNode = audioContext.createDynamicsCompressor();

       // 压缩器 在压缩 乐器音频的时候  不可以 压缩的 过于厉害  会影响他的表现力
       // 值越大  压缩的 范围 越小
        compressorNode.threshold.value = -100;
        //值越大 压缩的强度越大
        compressorNode.knee.value = 40;
        compressorNode.ratio.value = 10;
        //乐器 或者 人声 刚发音的时候 声音的清晰度
        compressorNode.attack.value = 1;
    //    乐器 人声  发音结束的时候  声音的清晰度
        compressorNode.release.value = 0.6;

        return compressorNode;
    }


    //失真效果器（电吉他 曾曾的声音 就是  失真效果器）破坏音频的波形
    //可以 改变 音频的 波形  可以 让音频变成 破磁带 或者 外星人 ...
    //添不好  会产生嚣叫
    function distortionEffect() {

        //创建 失真 效果器
        var distortion = audioContext.createWaveShaper();
        distortion.oversample.value = "2x";
        distortion.curve = makeDistortionCurve(100);

        return distortion;
    }

    function makeDistortionCurve(amount) {
        var k = typeof amount === 'number' ? amount : 50,
            n_samples = 44100,
            curve = new Float32Array(n_samples),
            deg = Math.PI / 180,
            i = 0,
            x;
        for ( ; i < n_samples; ++i ) {
            x = i * 2 / n_samples - 1;
            curve[i] = ( 3 + k ) * x * 20 * deg / ( Math.PI + k * Math.abs(x) );
        }
        return curve;
    }

    

    //滤波器->为了 提高 或者 衰减 某一部分的频率
    function audioFilterEffect() {

        //频率 2kHZ 比较大的
        //100HZ 比较小
        var filter = audioContext.createBiquadFilter();
        //设置 滤波的频率范围
        filter.frequency.value = 400;
        filter.detune.value = 30;
        filter.Q.value = 10;
        filter.gain.value = 0;
        filter.type.value = "highpass";

        return filter;
    }


    //创建频谱分析仪
    function anglyser() {
        var anglyserEle = audioContext.createAnalyser();
        anglyserEle.fftSize = 1024;
    //    获得到  每频率的长度
        var array = new Uint8Array(anglyserEle.frequencyBinCount);
        //把获得到的数据 存到数组中
        anglyserEle.getByteTimeDomainData(array);

        console.log(array);

        return anglyserEle;
    }
    
    
    init();

})();