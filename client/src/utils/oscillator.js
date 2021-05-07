function Oscillator (pitchInput, attackInput, decayInput, filterInput, volumeInput) {
    // TODO: when fully routed with the state inputs from the sliders we will get rid of the hard
    // coded values, and set the states to a default value if one isnt given from the server
    const pitch = pitchInput; //440hz = A4
    const attack = 0.1 || attackInput; // displayed in ms (0.1 probably lowest value "quickest attack")
    const decay =  1 || decayInput; //displayed in ms
    const filterCutoff = 400 || filterInput; // min 0 - max 1000 (max = no filter being applied)
    const volume = 0.9 || volumeInput; // 0.9 = full volume (was having funny sound when set to 1)

    // WARNING CAN BE VERY LOUD AT FIRST!
    // create a new audio context, this is how our browser knows we acces the built in Web Audio API classes & functions.
    var AudioContext = window.AudioContext || window.webkitAudioContext; 
    var audioCtx = new AudioContext();
    const now = audioCtx.currentTime;
    const filter = audioCtx.createBiquadFilter();
        // our oscillator type, default is sine wave,  would love to use others later ie: square, sawtooth, and triangle waves. 
    const oscillator = audioCtx.createOscillator();
        //TODO: would love to add oscillator types after a demo is ready of the app.
    oscillator.type = "sawtooth";
    const stopDuration = 0.1;

        // here is where we will affect the pitch. 440hz is the standard tuning for A4.
    oscillator.frequency.value = pitch;

        // gainNode is basically our volume for the sound, we will slowly decrease it to make the decay sound.
    var gainNode = audioCtx.createGain();
    
    // connects the oscillator to our volume control gainNode
    oscillator.connect(gainNode);

    filter.connect(gainNode);
    
    
    // gainNode.cancelScheduledValues(now);
    gainNode.gain.setValueAtTime(0, now);

    //     // ----- ATTACK -----
    gainNode.gain.linearRampToValueAtTime(volume, now + attack)

    //     // ----- DECAY -----
    gainNode.gain.exponentialRampToValueAtTime(0.1, now + attack + decay);

    //     // when to fully stop the sound
    gainNode.gain.linearRampToValueAtTime(0, now + attack + decay + stopDuration)

    // connects our gainNode to our default output.
    gainNode.connect(filter)

    // ----- FILTER -----
    filter.type = filter.LOWPASS;
    filter.q = 1; //resonance
    filter.frequency.value = filterCutoff;

        //connect filter to destination
    filter.connect(audioCtx.destination)
        // start the sound
    oscillator.start();
}

export default Oscillator;