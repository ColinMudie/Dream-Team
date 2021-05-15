function Oscillator(pitchInput, attackInput, decayInput, filterInput, volumeInput) {
    // create a new audio context, this is how our browser knows we acces the built in Web Audio API classes & functions.
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const audioCtx = new AudioContext({
        latencyHint: "interactive"
    });
    const now = audioCtx.currentTime;
    const filter = audioCtx.createBiquadFilter();
    const finalGain = audioCtx.createGain();
    finalGain.gain.value = volumeInput;
    const latency = audioCtx.baseLatency;
    console.log(`audio context latency: ${latency}`);
    const compressor = audioCtx.createDynamicsCompressor();
        // our oscillator type, default is sine wave,  would love to use others later ie: square, sawtooth, and triangle waves. 
    const oscillator = audioCtx.createOscillator();
        //TODO: would love to add oscillator types after a demo is ready of the app.
    oscillator.type = "sawtooth";
    const stopDuration = 0.1;
        // here is where we will affect the pitch. 440hz is the standard tuning for A4.
    oscillator.frequency.value = pitchInput;
        // gainNode is basically our volume for the sound, we will slowly decrease it to make the decay sound.
    const gainNode = audioCtx.createGain();
        // connects the oscillator to our volume control gainNode
    oscillator.connect(gainNode);
    filter.connect(gainNode);
        // gainNode.cancelScheduledValues(now);
    gainNode.gain.setValueAtTime(0, now);
        //     // ----- ATTACK -----
    gainNode.gain.linearRampToValueAtTime(0.8, now + attackInput)
        //     // ----- DECAY -----
    gainNode.gain.exponentialRampToValueAtTime(0.1, now + attackInput + decayInput);
        //     // when to fully stop the sound
    gainNode.gain.linearRampToValueAtTime(0, now + attackInput + decayInput + stopDuration)
        // connects our gainNode to our default output.
    gainNode.connect(filter)
        // ----- FILTER -----
    filter.type = 'lowpass';
        // filter.q = 1; //resonance
    filter.frequency.value = filterInput;
    //connect filter to destination
    filter.connect(compressor)
    compressor.connect(finalGain)
    finalGain.connect(audioCtx.destination)
        // start the sound
    oscillator.start();
}



export default Oscillator;