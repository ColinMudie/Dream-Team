import React from 'react';
import Oscillator from '../../utils/oscillator';

const WhiteKey = ({ whiteKey }) => {
    return (
        <div className="white-key">
            {
                whiteKey.map((item) => {
                    return <div className="w-key" key={item.id} onClick={Oscillator}>
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