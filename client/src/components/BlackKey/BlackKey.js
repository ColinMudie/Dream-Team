import React, { useContext } from 'react';
import Oscillator from '../../utils/oscillator';
import SynthContext from '../../utils/SynthContext';

const BlackKey = ({ blackKey, blackKey2 }) => {
    const { attack, decay, filter, volume } = useContext(SynthContext);
    const BlackKeySort = (x) => {
        const bk = x.map((item) => {
            return <div className="b-key" key={item.id} onClick={() => Oscillator(item.frequency, attack, decay, filter, volume)} >
                <h5>
                    <span>{item.keyname}</span>
                </h5>
            </div>
        })
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
