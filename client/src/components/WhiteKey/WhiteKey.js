import React, { useContext } from 'react';
import Oscillator from '../../utils/oscillator';
import SynthContext from '../../utils/SynthContext';
import KeypressContext from '../../utils/keypressContext';


const WhiteKey = ({ whiteKey }) => {
    const { activeKey } = useContext(KeypressContext);
    const { parameters } = useContext(SynthContext);
    return (
        <div className="white-key">
            {
                whiteKey.map((item) => {
                    return <div 
                    className= {`w-key ${activeKey === item.id ? "active" : ""}`}
                    key={item.id} 
                        onClick={() => Oscillator(item.frequency, parameters.attack, parameters.decay, parameters.filter, parameters.waveShape, parameters.volume)}>
                        <h5 className="w-note">
                            <span >{item.keyname}</span>
                        </h5>
                    </div>
                })
            }
        </div>
    );
}

export default WhiteKey;
