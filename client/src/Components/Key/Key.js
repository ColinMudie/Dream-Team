import React from 'react';
import Oscillator from '../../utils/oscillator';

function Key(props) {
    
    return (
// Sara's addition
<div className="keytype" key={props.keytype}>
        <a className="btn key" href={props.key} >key</a>
        
        </div>

// Colin's change
        <a onClick={Oscillator} className="btn key" href={props.key} >key</a>
    );
}

export default Key;