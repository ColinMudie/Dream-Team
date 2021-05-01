import React from 'react';
import Oscillator from '../../utils/oscillator';

function Key(props) {
    
    return (
        <a onClick={Oscillator} className="btn key" href={props.key} >key</a>
    );
}

export default Key;