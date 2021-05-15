import React, {useEffect, useContext} from 'react';
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

function Keyboard() {
    const { parameters } = useContext(SynthContext);
    useEffect(() => {
        function keyOscillator(object) {
            Oscillator(object.frequency, parameters.attack, parameters.decay, parameters.filter, parameters.volume)
        }
        const handleKeyPress = (event) => {
            switch (event.key) {
                case 'a':
                    keyOscillator(whiteObj[0])
                    break;
                case 's':
                    keyOscillator(whiteObj[1])
                    break;
                case 'd':
                    keyOscillator(whiteObj[2])
                    break;
                case 'f':
                    keyOscillator(whiteObj[3])
                    break;
                case 'g':
                    keyOscillator(whiteObj[4])
                    break;
                case 'h':
                    keyOscillator(whiteObj[5])
                    break;
                case 'j':
                    keyOscillator(whiteObj[6])
                    break;
                case 'k':
                    keyOscillator(whiteObj[7])
                    break;
                case 'w':
                    keyOscillator(blackObj[0])
                    break;
                case 'e':
                    keyOscillator(blackObj[1])
                    break;
                case 't':
                    keyOscillator(blackObj2[0])
                    break;
                case 'y':
                    keyOscillator(blackObj2[1])
                    break;
                case 'uas':
                    keyOscillator(blackObj2[2])
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
        
            <Grid>
                <div className="keyboard">
                    <BlackRow/>
                    <WhiteRow />
                </div>
            </Grid>
        
    );
}

export default Keyboard;
