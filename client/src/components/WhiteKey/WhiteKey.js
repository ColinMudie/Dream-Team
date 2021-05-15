import React, { useContext } from 'react';
import Oscillator from '../../utils/oscillator';
import SynthContext from '../../utils/SynthContext';
import KeypressContext from '../../utils/keypressContext';


const WhiteKey = ({ whiteKey }) => {
    const { attack, decay, filter, volume } = useContext(SynthContext);
    const { activeKey } = useContext(KeypressContext);
    return (
        <div className="white-key">
            {
                whiteKey.map((item) => {
                    return <div 
                    className= {`w-key ${activeKey === item.id ? "active" : ""}`}
                    key={item.id} 
                        onClick={() => Oscillator(item.frequency, attack, decay, filter, volume)}>
                        <h5>
                            <span>{item.keyname}</span>
                        </h5>
                    </div>
                })
            }
        </div>
    );
}

export default WhiteKey;
