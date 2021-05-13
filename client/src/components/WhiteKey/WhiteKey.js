import React, { useContext } from 'react';
import Oscillator from '../../utils/oscillator';
import SynthContext from '../../utils/SynthContext';
import ReactDOM from 'react-dom';


const WhiteKey = ({ whiteKey }) => {
    const { attack, decay, filter, volume } = useContext(SynthContext);
    function handleOnClick (item) {
        Promise.resolve().then(() => {
            ReactDOM.unstable_batchedUpdates(() => {
                Oscillator(item.frequency, attack, decay, filter, volume)
            })
        })
    }

    return (
        <div className="white-key">
            {
                whiteKey.map((item) => {
                    return <div 
                    className="w-key" 
                    key={item.id} 
                    onClick={() => handleOnClick(item)}>
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
