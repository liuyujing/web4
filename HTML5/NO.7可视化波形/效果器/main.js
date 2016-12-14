/**
 * Created by liuyujing on 2016/12/14.
 */
(function () {

    var audioContext = new AudioContext();
    var bufferSource = audioContext.createBufferSource();
    
    function init() {

        initPlayer();

        var button = document.querySelector(".play");
        button.onclick = function () {
            play();
        };
    }
    
    function initPlayer() {
        loadAudio("丑八怪.mp3",function (arrayBuffer) {

            audioContext.decodeAudioData(arrayBuffer,function (buffer) {
                bufferSource.buffer = buffer;
                // var compressorNode =  compressor();
                // bufferSource.connect(compressorNode);
                // compressorNode.connect(audioContext.destination);

                // var shaperNode =  waveShaper();
                // bufferSource.connect(shaperNode);
                // shaperNode.connect(audioContext.destination);

                // var filterNode = filter();
                // bufferSource.connect(filterNode);
                // filterNode.connect(audioContext.destination);


            });

        });
    }
    
    function play() {
        bufferSource.start();
    }
    
    function pause() {
        
    }

    
    function oscillator() {
        var oscillatorNode = audioContext.createOscillator();

        oscillatorNode.type.value = 'square';
        oscillatorNode.frequency.value = 3000;
        return oscillatorNode;
    }

    function filter() {
        var filterNode = audioContext.createBiquadFilter();
        filterNode.frequency.value = 400;
        filterNode.detune.value = 500;
        filterNode.Q.value = 10;
        filterNode.gain.value = 20;
        filterNode.type.value = "highpass";
        return filterNode;
    }

    function compressor() {
        var comp = audioContext.createDynamicsCompressor();
        comp.threshold.value = -50;
        comp.knee.value = 10;
        comp.ratio.value = 20;
        comp.attack.value = 0.7;
        comp.release.value = 0.7;
        return comp;
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
    function waveShaper() {
        var shaper = audioContext.createWaveShaper();
        shaper.oversample.value = "2x";
        shaper.curve = makeDistortionCurve(50);
        return shaper;
    }

    function loadAudio(url,callback) {
        var request = new XMLHttpRequest();
        request.open("GET",url);
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