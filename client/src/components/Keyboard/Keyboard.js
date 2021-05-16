import React, { useEffect, useContext, useState } from 'react';
import SynthContext from '../../utils/SynthContext';
import BlackRow from '../BlackRow/BlackRow';
import Oscillator from '../../utils/oscillator';
import WhiteRow from '../WhiteRow/WhiteRow';
// import Container from '@material-ui/core/Container';
import whiteObj from '../../utils/whiteObj';
import blackObj from '../../utils/blackObj';
import blackObj2 from '../../utils/blackObj2';
import Grid from "@material-ui/core/Grid";
import './Keyboard.css';
import keypressContext from '../../utils/keypressContext';

function Keyboard() {
    const [activeKey, setActiveKey] = useState(-1);
    const { parameters } = useContext(SynthContext);
    
    useEffect(() => {
        const resetActiveKey = () => {
            setActiveKey(-1)
            console.log(activeKey);
        }
        const handleKeyPress = (event) => {
            function keyOscillator(object, sustain) {
                Oscillator(object.frequency, parameters.attack, parameters.decay, parameters.filter, parameters.volume, sustain)
            }
            switch (event.key) {
                case 'a':
                    setActiveKey(6);
                    console.log(activeKey)
                    keyOscillator(whiteObj[0], activeKey)                    
                    break;
                case 's':
                    keyOscillator(whiteObj[1])
                    setActiveKey(7)
                    break;
                case 'd':
                    keyOscillator(whiteObj[2])
                    setActiveKey(8)
                    break;
                case 'f':
                    keyOscillator(whiteObj[3])
                    setActiveKey(9)
                    break;
                case 'g':
                    keyOscillator(whiteObj[4])
                    setActiveKey(10)
                    break;
                case 'h':
                    keyOscillator(whiteObj[5])
                    setActiveKey(11)
                    break;
                case 'j':
                    keyOscillator(whiteObj[6])
                    setActiveKey(12)
                    break;
                case 'k':
                    keyOscillator(whiteObj[7])
                    setActiveKey(13)
                    break;
                case 'w':
                    keyOscillator(blackObj[0])
                    setActiveKey(1)
                    break;
                case 'e':
                    keyOscillator(blackObj[1])
                    setActiveKey(2)
                    break;
                case 't':
                    keyOscillator(blackObj2[0])
                    setActiveKey(3)
                    break;
                case 'y':
                    keyOscillator(blackObj2[1])
                    setActiveKey(4)
                    break;
                case 'u':
                    keyOscillator(blackObj2[2])
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
    }, [parameters.attack, parameters.decay, parameters.filter, parameters.volume, activeKey]);
    return (
        <keypressContext.Provider value={{ activeKey, setActiveKey }}>
            <Grid>
                <div className="keyboard">
                    <BlackRow />
                    <WhiteRow />
                </div>
            </Grid>
        </keypressContext.Provider>
    );
}

export default Keyboard;
