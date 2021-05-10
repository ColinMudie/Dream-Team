import React from 'react';
import WhiteKey from '../WhiteKey/WhiteKey';
import WhiteObj from "../../utils/whiteObj";
import "./WhiteRow.css";
import { useState } from 'react';

function WhiteRow() {
    const [ whiteKey ] = useState(WhiteObj)
    return (
        <div className="KeyDiv">
            <div className="key-info">
                <WhiteKey whiteKey={whiteKey}/>
            </div>
        </div>
        
    
    );
}

export default WhiteRow;
