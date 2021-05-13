import React, { useContext } from 'react';
import Oscillator from '../../utils/oscillator';
import SynthContext from '../../utils/SynthContext';



const WhiteKey = ({ whiteKey }) => {
    const { attack, decay, filter, volume } = useContext(SynthContext);

    return (
        <div className="white-key">
            {
                whiteKey.map((item) => {
                    return <div 
                    className="w-key" 
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
