function Oscillator (pitchInput, attackInput, decayInput, filterInput, volumeInput) {
    const pitch =  440 || pitchInput;
    const attack = 0.0000001 || attackInput;
    const decay =  1;
    const filter = filterInput || 100;
    const volume = volumeInput || 100;
    // WARNING CAN BE VERY LOUD AT FIRST!
    // create a new audio context, this is how our browser knows we acces the built in Web Audio API classes & functions.
    const AudioContext = window.AudioContext || window.webkitAudioContext; 
    var audioCtx = new AudioContext();
    const now = audioCtx.currentTime
        // our oscillator type, default is sine wave,  would love to use others later ie: square, sawtooth, and triangle waves. 
    var oscillator = audioCtx.createOscillator();
    const stopDuration = 0.1;
        // here is where we will affect the pitch. 440hz is the standard tuning for A4.
        // to get different pitches the '440' will be set to an incoming prop
        // that we will change on each key to get a different note
        // we will need to look at a chart to use the other values. 
    oscillator.frequency.value = pitch;

        // gainNode is basically our volume for the sound, we will slowly decrease it to make the decay sound.
    var gainNode = audioCtx.createGain();
    
    
    // connects the oscillator to our volume control gainNode
    oscillator.connect(gainNode);
    // connects our gainNode to our default output.
    gainNode.connect(audioCtx.destination)
    // gainNode.cancelScheduledValues(now);
    gainNode.gain.setValueAtTime(0, now);
    //     // --- ATTACK ---
    gainNode.gain.linearRampToValueAtTime(1, now + attack)
        // --- DECAY ---
    gainNode.gain.exponentialRampToValueAtTime(0.1, attack + decay);
    gainNode.gain.linearRampToValueAtTime(0, attack + decay + stopDuration)
        // start the sound
    oscillator.start();

        

        
    

}

    

export default Oscillator;