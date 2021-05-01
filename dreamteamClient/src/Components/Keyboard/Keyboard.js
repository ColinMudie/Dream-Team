import React from 'react';
import Key from '../Key/Key';
import KeysObj from "../../utils/KeysObj";

function Keyboard() {
    return (
        
            {KeysObj.map((props) => {
                return(
                <div className="keytype" key={props.type}>
                return (
                    <Key 
                    id={props.id}
                    keyname={props.name}
                    keytype={props.type}
                    keypitch={props.pitch} 
                     />
                );
                </div>)
            })}
        
    );
}

export default Keyboard;
