import React from "react";

const SynthContext = React.createContext({
    parameters: { 
        attack: 0,
        setAttack: () => { },
        decay: 0,
        setDecay: () => { },
        filter: 0,
        setFilter: () => { },
        volume: 0,
        setVolume: () => { },
        waveShape:"",
        setWaveShape: () => {},
    }
});

export default SynthContext;