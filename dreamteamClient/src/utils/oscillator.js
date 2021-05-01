function Oscillator () {
    // WARNING WILL BE VERY LOUD AT FIRST!
    const audioCtx = new (window.AudioContext || window.webkitAudioContext); 
    var sine = audioCtx.createOscillator();
    sine.start();
    sine.connect(audioCtx.destination);
}

export default Oscillator;