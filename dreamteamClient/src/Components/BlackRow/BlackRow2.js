import React from 'react';
import BlackKey2 from '../BlackKey/BlackKey2';
import BlackObj2 from "../../utils/blackObj2";
import "./BlackRow.css";
import { useState } from 'react';

function BlackRow2() {
    const [ blackKey2 ] = useState(BlackObj2)
    return (
        <div className="Bk-KeyDiv2">
            <div className="bk-key-info">
                <BlackKey2 blackKey2={blackKey2}/>
            </div>
        </div>
        
    
    );
}

export default BlackRow2;