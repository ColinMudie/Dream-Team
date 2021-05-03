import React from 'react';
import BlackKey from '../BlackKey/BlackKey';
import BlackObj from "../../utils/blackObj";
import "./BlackRow.css";
import { useState } from 'react';

function BlackRow() {
    const [ blackKey ] = useState(BlackObj)
    return (
        <div className="Bk-KeyDiv">
            <div className="bk-key-info">
                <BlackKey blackKey={blackKey}/>
            </div>
        </div>
        
    
    );
}

export default BlackRow;