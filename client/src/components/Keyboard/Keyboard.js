import React, {useEffect, useContext, useState} from 'react';
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
import KeypressContext from '../../utils/keypressContext';

function Keyboard() {
    const [activeKey, setActiveKey] = useState(-1);
    const { parameters } = useContext(SynthContext);
    useEffect(() => {
        function keyOscillator(object) {
            Oscillator(object.frequency, parameters.attack, parameters.decay, parameters.filter, parameters.volume)
        }

        const resetActiveKey = () => {
            setTimeout(function(){
                setActiveKey(-1)
            }, 300)
        }

        const handleKeyPress = (event) => {
            switch (event.key) {
                case 'a':
                    keyOscillator(whiteObj[0])
                    setActiveKey(6)
                    resetActiveKey()
                    break;
                case 's':
                    keyOscillator(whiteObj[1])
                    setActiveKey(7)
                    resetActiveKey()
                    break;
                case 'd':
                    keyOscillator(whiteObj[2])
                    setActiveKey(8)
                    resetActiveKey()
                    break;
                case 'f':
                    keyOscillator(whiteObj[3])
                    setActiveKey(9)
                    resetActiveKey()
                    break;
                case 'g':
                    keyOscillator(whiteObj[4])
                    setActiveKey(10)
                    resetActiveKey()
                    break;
                case 'h':
                    keyOscillator(whiteObj[5])
                    setActiveKey(11)
                    resetActiveKey()
                    break;
                case 'j':
                    keyOscillator(whiteObj[6])
                    setActiveKey(12)
                    resetActiveKey()
                    break;
                case 'k':
                    keyOscillator(whiteObj[7])
                    setActiveKey(13)
                    resetActiveKey()
                    break;
                case 'w':
                    keyOscillator(blackObj[0])
                    setActiveKey(1)
                    resetActiveKey()
                    break;
                case 'e':
                    keyOscillator(blackObj[1])
                    setActiveKey(2)
                    resetActiveKey()
                    break;
                case 't':
                    keyOscillator(blackObj2[0])
                    setActiveKey(3)
                    resetActiveKey()
                    break;
                case 'y':
                    keyOscillator(blackObj2[1])
                    setActiveKey(4)
                    resetActiveKey()
                    break;
                case 'uas':
                    keyOscillator(blackObj2[2])
                    setActiveKey(5)
                    resetActiveKey()
                    break;
                default:
                    break;
            }
        }
        window.addEventListener('keydown', handleKeyPress);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [parameters.attack, parameters.decay, parameters.filter, parameters.volume]);
    return (
        <keypressContext.Provider value={{ activeKey, setActiveKey }}>
            <Grid>
                <div className="keyboard">
                    <BlackRow/>
                    <WhiteRow />
                </div>
            </Grid>
        </keypressContext.Provider>
    );
}

export default Keyboard;
