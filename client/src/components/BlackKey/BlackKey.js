import React from 'react';
import Oscillator from '../../utils/oscillator';

const BlackKey = ({ blackKey, blackKey2 }) => {
    const BlackKeySort = (x) => {

        const bk = x.map((item) => {
            return <div className="b-key" key={item.id} onClick={() => Oscillator(item.frequency)} >
                <h5>
                    <span>{item.keyname}</span>
                </h5>
            </div>
        })
        console.log("This is working");
        return bk;
    }
    return (
        <div className="row">
            <div className="Bk-KeyDiv">
                <div className="black-key">
                    {BlackKeySort(blackKey)}
                </div>
            </div>
            <div className="Bk-KeyDiv2">
                <div className="black-key2">
                    {BlackKeySort(blackKey2)}
                </div>
            </div>
        </div>
    );
}

export default BlackKey;
