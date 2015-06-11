
var bufferSize = 4096;
var whiteNoise;
var whiteNoise2;
var context;
var gain;
var gain2;
function init() {
  try {
    // Fix up for prefixing
    window.AudioContext = window.AudioContext||window.webkitAudioContext;
    context = new AudioContext();
console.log("audio context created");
  }
  catch(e) {
    alert('Web Audio API is not supported in this browser');
  }
}

function psht(amp){
var now = context.currentTime;
gain.gain.value = 0;
gain.gain.cancelScheduledValues(now);
gain.gain.setValueAtTime(gain.gain.value, now);
gain.gain.linearRampToValueAtTime(amp, now + 0.01);
gain.gain.linearRampToValueAtTime(0, now+ 0.03);

}


angular.element(document).ready(function(){
init();
gain = context.createGain();
gain2 = context.createGain();
whiteNoise2= context.createScriptProcessor(bufferSize, 1, 1);
whiteNoise2.onaudioprocess = function(e) {
	    var output = e.outputBuffer.getChannelData(0);
	        for (var i = 0; i < bufferSize; i++) {
			        output[i] = Math.random() * 2 - 1;
				    }

}
osc = context.createOscillator();
osc.connect(gain);
osc.frequency.value=2500;
osc.noteOn(0);
filterNode = context.createBiquadFilter();
filterNode.type = "bandpass";
filterNode.frequency.value = 750;
filterNode.Q.value =  3;

gain.gain.setValueAtTime(0, context.currentTime);
gain2.gain.setValueAtTime(1, context.currentTime);
gain2.connect(context.destination);
whiteNoise2.connect(filterNode);
filterNode.connect(gain2);
gain.connect(context.destination);
});
