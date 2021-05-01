import React from 'react';

function Key(props) {
    
    return (
<div className="keytype" key={props.keytype}>
        <a className="btn key" href={props.key} >key</a>
        
        </div>
    );
}

export default Key;