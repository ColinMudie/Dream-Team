import React from 'react';
import Key from './Key/Key';
import KeysObj from "../utils/KeysObj";

function Keyboard() {
    return (
         KeysObj.map((props) => {

                <div>
                    <Key
                        id={props.id}
                        keyname={props.name}
                        keytype={props.type}
                        keypitch={props.pitch}
                    />
                </div>
            }
            )
            )
        }
        

export default Keyboard;
