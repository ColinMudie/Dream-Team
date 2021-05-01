import React from 'react';
import Key from '../Key/Key';
import KeysObj from 'placeholder for util folder';

function Keyboard() {
    return (
        <div>
            {KeysObj.map((Key) => {
                return (
                    <Key 
                    id={Key.id}
                    keyname={key.name}
                    keytype={key.type}
                    keypitch={key.pitch} 
                     />
                );
            })}
        </div>
    );
}

export default Keyboard;
