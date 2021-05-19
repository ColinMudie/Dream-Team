import React, { useContext } from 'react';
import Oscillator from '../../utils/oscillator';
import SynthContext from '../../utils/SynthContext';
import KeypressContext from '../../utils/keypressContext';
import Grid from '@material-ui/core/Grid';
import './Keyboard 2.css';
import { useState } from 'react';
import keysObj from '../../utils/keysObj';

const Keyboard2 = () => {
    const { activeKey } = useContext(KeypressContext);
    const { parameters } = useContext(SynthContext);
    const [keysInfo] = useState(keysObj)
    return (
        <>
        {
            keysInfo.map(item => (
            <Grid container className="keyboard-row" xs={20} direction="row">

                <Grid sx={{ flexGrow: 1 }} className="black-key-row-left">
                    
                    <Grid container  xs={16} direction="row">
                        <div className={`bl-key ${activeKey === item.id ? "active" : ""}`}
                        key={item.id} onClick={() => Oscillator(item.frequency, parameters.attack, parameters.decay, parameters.filter, parameters.waveShape, parameters.volume)} >
                 <h5 className="bl-note">
                    <span>{item.keyname}</span>
                </h5>
                        </div>
                        <div  className="bl-key" >
                        </div>
                    </Grid>
                </Grid>

                <Grid sx={{ flexGrow: 1 }} className="black-key-row-right">
                    <Grid container  xs={16} direction="row">
                        <div  className="bl-key" >
                        </div>
                        <div  className="bl-key" >
                        </div>
                        <div  className="bl-key" >
                        </div>
                    </Grid>
                </Grid>

                <Grid sx={{ flexGrow: 1 }} className="white-key-row">
                    <Grid container  xs={16} direction="row">
                        <div  className="wh-key" >
                        </div>
                        <div  className="wh-key" >
                        </div>
                        <div  className="wh-key" >
                        </div>
                        <div  className="wh-key" >
                        </div>
                        <div  className="wh-key" >
                        </div>
                        <div  className="wh-key" >
                        </div>
                        <div  className="wh-key" >
                        </div>
                        <div  className="wh-key" >
                        </div>
                    </Grid>
                </Grid>
            </Grid>
            ))
}
        </>
    );
}

export default Keyboard2;