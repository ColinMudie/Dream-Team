import React, { useContext, useEffect, useState } from 'react';
import Oscillator from '../../utils/oscillator';
import SynthContext from '../../utils/SynthContext';
import keypressContext from '../../utils/keypressContext';
import Grid from '@material-ui/core/Grid';
import './Keyboard 2.css';
import keysObj from '../../utils/keysObj';

const Keyboard2 = () => {

    const [keysInfo] = useState(keysObj)

    const [activeKey, setActiveKey] = useState(-1);
    const { parameters } = useContext(SynthContext);

    useEffect(() => {
        const resetActiveKey = () => {
            setActiveKey(-1)
            console.log(activeKey);
        }
        const handleKeyPress = (event) => {
            function keyOscillator(object, sustain) {
                Oscillator(object.frequency, parameters.attack, parameters.decay, parameters.filter, parameters.waveShape, parameters.volume, sustain)
            }
            switch (event.key) {
                case 'a':
                    setActiveKey(6);
                    console.log(activeKey)
                    keyOscillator(keysObj[2][0], activeKey)
                    break;
                case 's':
                    keyOscillator(keysObj[2][1])
                    setActiveKey(7)
                    break;
                case 'd':
                    keyOscillator(keysObj[2][2])
                    setActiveKey(8)
                    break;
                case 'f':
                    keyOscillator(keysObj[2][3])
                    setActiveKey(9)
                    break;
                case 'g':
                    keyOscillator(keysObj[2][4])
                    setActiveKey(10)
                    break;
                case 'h':
                    keyOscillator(keysObj[2][5])
                    setActiveKey(11)
                    break;
                case 'j':
                    keyOscillator(keysObj[2][6])
                    setActiveKey(12)
                    break;
                case 'k':
                    keyOscillator(keysObj[2][7])
                    setActiveKey(13)
                    break;
                case 'w':
                    keyOscillator(keysObj[0][0])
                    setActiveKey(1)
                    break;
                case 'e':
                    keyOscillator(keysObj[0][1])
                    setActiveKey(2)
                    break;
                case 't':
                    keyOscillator(keysObj[1][0])
                    setActiveKey(3)
                    break;
                case 'y':
                    keyOscillator(keysObj[1][1])
                    setActiveKey(4)
                    break;
                case 'u':
                    keyOscillator(keysObj[1][2])
                    setActiveKey(5)
                    break;
                default:
                    break;
            }
        }
        window.addEventListener('keydown', handleKeyPress);
        window.addEventListener('keyup', resetActiveKey);
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
            window.removeEventListener('keydown', resetActiveKey);
        };
    }, [parameters.attack, parameters.decay, parameters.filter, parameters.waveShape, parameters.volume, activeKey]);
    return (
        <keypressContext.Provider value={{ activeKey, setActiveKey }}>

            <Grid container className="keyboard-row" xs={20} direction="row">

                <Grid sx={{ flexGrow: 1 }} className="black-key-row-left">

                    <Grid container xs={16} direction="row">
                        {
                            keysInfo[0].map(item => {
                                return <div
                                    onClick={() => Oscillator(item.frequency, parameters.attack, parameters.decay, parameters.filter, parameters.waveShape, parameters.volume)}
                                    className={`bl-key ${activeKey === item.id ? "active" : ""}`}>

                                    <h5 className="bl-note">
                                        <span>{item.keyname}</span>
                                    </h5>

                                </div>
                            })}
                    </Grid>
                </Grid>

                <Grid sx={{ flexGrow: 1 }} className="black-key-row-right">
                    <Grid container xs={16} direction="row">
                        {
                            keysInfo[1].map(item => {
                                return <div
                                    onClick={() => Oscillator(item.frequency, parameters.attack, parameters.decay, parameters.filter, parameters.waveShape, parameters.volume)}
                                    className={`bl-key ${activeKey === item.id ? "active" : ""}`}>

                                    <h5 className="bl-note">
                                        <span>{item.keyname}</span>
                                    </h5>

                                </div>
                            })}
                    </Grid>
                </Grid>

                <Grid sx={{ flexGrow: 1 }} className="white-key-row">
                    <Grid container xs={16} direction="row">
                        {
                            keysInfo[2].map(item => {
                                return <div
                                    onClick={() => Oscillator(item.frequency, parameters.attack, parameters.decay, parameters.filter, parameters.waveShape, parameters.volume)}
                                    className={`wh-key ${activeKey === item.id ? "active" : ""}`}>

                                    <h5 className="wh-note">
                                        <span>{item.keyname}</span>
                                    </h5>

                                </div>
                            })}
                    </Grid>
                </Grid>
            </Grid>


        </keypressContext.Provider>
    );
}

export default Keyboard2;