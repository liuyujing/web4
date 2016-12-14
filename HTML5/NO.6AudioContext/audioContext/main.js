/**
 * Created by liuyujing on 2016/12/12.
 */
(function () {

    var resultBuffer = null;
    function init() {

        var audioContext = new AudioContext();

        var button = document.querySelector(".control");

        button.onclick = function () {
            loadAudio("丑八怪.mp3",function (audioData) {
                // inputData(audioContext,audioData);
                playBuffers(audioContext,audioData);
            });
        };

        var recorderButton = document.querySelector(".recorder");
        recorderButton.onclick = function () {
            recorder(audioContext);
        };

    }

    function recorder(context) {
        navigator.getUserMedia = (navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia ||
        navigator.msGetUserMedia);
        if (navigator.getUserMedia){
            navigator.getUserMedia({audio:true},function (stream) {
                var source = context.createMediaStreamSource(stream);

                var recorder=context.createScriptProcessor(1024,1,0);

                source.connect(recorder);
                recorder.connect(context.destination);
                source.start();
            },function (error) {
                console.log(error);
            });
        }
    }

    function compressor(context) {
        var compressor = context.createDynamicsCompressor();
        compressor.threshold.value = -50;
        compressor.knee.value = 40;
        compressor.ratio.value = 12;
        compressor.attack.value = 0;
        compressor.release.value = 0.25;
        return compressor;
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

    function waveShaper(context) {
        var distortion = context.createWaveShaper();
        distortion.oversample = '4x';
        distortion.curve = makeDistortionCurve(400);
        return distortion;
    }

    function filter(context) {
        var filterNode = context.createBiquadFilter();
        filterNode.type = "lowshelf";
        filterNode.frequency.value = 2000;
        filterNode.gain.value = 25;
        filterNode.detune = 10000;
        return filterNode;
    }

    function panner(context) {
        var panner = context.createStereoPanner();
        panner.pan.value = 0.5;
        return panner;
    }
    function gain(context) {

        var gainNode = context.createGain();
        gainNode.gain.value = 50;
        return gainNode;
    }

    function convolver(context) {
        var convolverNode= context.createConvolver();
        convolverNode.buffer = resultBuffer;
        return convolverNode;
    }

    function delay(context) {
        var delayNode= context.createDelay(5.0);
        return delayNode;
    }

    function inputData(context,audioData) {
        console.log(audioData);

        var source = context.createBufferSource();
        context.decodeAudioData(audioData,function (buffer) {
            resultBuffer = buffer;
            source.buffer = resultBuffer;
            // var delayNode = delay(context);
            // var gainNode = gain(context);
            // var pannerNode = panner(context);
            // var filterNode = filter(context);
            // var analyserNode = analyser(context);
            // source.connect(analyserNode);
            // var dis = waveShaper(context);
            // analyserNode.connect(dis);

            var com = compressor(context);
            source.connect(com);
            com.connect(context.destination);


            source.start();
            // analyserNode.fftSize = 2048;

            readData(analyserNode);

        });
    }

    function readData(analyserNode) {

        var bufferLength = analyserNode.frequencyBinCount;
        var dataArray = new Uint8Array(bufferLength);
        analyserNode.getByteTimeDomainData(dataArray);
        console.log(dataArray);
        requestAnimationFrame(function () {
            readData(analyserNode);
        })
    }

    function analyser(context) {
        var analyser = context.createAnalyser();

        return analyser;
    }

    function playBuffers(context,audioData) {
        console.log(audioData);

        var source = context.createBufferSource();
        context.decodeAudioData(audioData,function (buffer) {
            source.buffer = buffer;

            var splitter = context.createChannelSplitter(2);
            source.connect(splitter);
            var merger = context.createChannelMerger(2);

            var gainNode = context.createGain();
            gainNode.gain.value = 0.5;
            splitter.connect(gainNode, 0);

            gainNode.connect(merger, 0, 1);
            splitter.connect(merger, 1, 0);

            var dest = context.createMediaStreamDestination();
            merger.connect(dest);

            source.start();
        });
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
