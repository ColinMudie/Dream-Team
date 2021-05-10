import React from 'react';
import BlackKey from '../BlackKey/BlackKey';
import BlackObj from "../../utils/blackObj";
import BlackObj2 from "../../utils/blackObj2";
import "./BlackRow.css";
import { useState } from 'react';

function BlackRow() {
    const [blackKey] = useState(BlackObj)
    const [blackKey2] = useState(BlackObj2)
    return (

        <div className="bk-key-info">
            <BlackKey blackKey={blackKey} blackKey2={blackKey2} />
        </div>



    );
}

export default BlackRow;
