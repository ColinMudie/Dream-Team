function Oscillator (props) {
    // WARNING CAN BE VERY LOUD AT FIRST!
    // create a new audio context, this is how our browser knows we acces the built in Web Audio API classes & functions.
    const AudioContext = window.AudioContext || window.webkitAudioContext; 
    var audioCtx = new AudioContext();

        // our oscillator type, default is sine wave,  would love to use others later ie: square, sawtooth, and triangle waves. 
    var oscillator = audioCtx.createOscillator();

        // here is where we will affect the pitch. 440hz is the standard tuning for A4.
        // to get different pitches the '440' will be set to an incoming prop
        // that we will change on each key to get a different note
        // we will need to look at a chart to use the other values. 
    oscillator.frequency.value = 440;

        // gainNode is basically our volume for the sound, we will slowly decrease it to make the decay sound.
    var gainNode = audioCtx.createGain();

    // gainNode.gain.setValueAtTime(0, audioCtx.currentTime)
        // setting our decay right here
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 2);

        // start the sound
    oscillator.start();

        // connects the oscillator to our volume control gainNode
    oscillator.connect(gainNode);

        // connects our gainNode to our default output.
    gainNode.connect(audioCtx.destination)
    

}

    

export default Oscillator;