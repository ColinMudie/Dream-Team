import React, { useContext, useState } from 'react';
import "./SynthPage.css";
import Keyboard2 from '../../components/Keyboard/Keyboard2';
import Presets from '../../components/Presets/Presets';
import CheckBoxWave from '../../components/CheckBoxWave/CheckBoxWave';
import SliderContainer from '../../components/SliderContainer/SliderContainer';
import Header from '../../components/Header/Header';
import { Grid, Container } from '@material-ui/core';
import LogInContext from "../../utils/LogInContext";
import { Redirect } from 'react-router-dom';
import SynthContext from "../../utils/SynthContext";



const SynthPage = () => {
    const { isLoggedIn } = useContext(LogInContext);
    // here is where we will check out isLoggedIn state to see if the user is allowed to be here or 
    // needs to be redirected to login if the state is false.

    //STATES FOR SYNTH PARAMTERS
    const [attack, setAttack] = useState(0.1);
    const [decay, setDecay] = useState(1);
    const [filter, setFilter] = useState(500);
    const [volume, setVolume] = useState(0.9);
    const [waveShape, setWaveShape] = useState("sine")


    if (!isLoggedIn) {
        return <Redirect to="/login" />
    }

    return (
        <SynthContext.Provider value={{
            parameters: {
                attack: attack,
                setAttack: setAttack,
                decay: decay,
                setDecay: setDecay,
                filter: filter,
                setFilter: setFilter,
                volume: volume,
                setVolume: setVolume,
                waveShape: waveShape,
                setWaveShape: setWaveShape,
            }
        }
        }>
            <Container direction="row" spacing={0}>
                <Grid item xs={12}>
                    <Header className="header" />
                </Grid>
                <Grid container direction="row" >

                    <Grid className="slidercontainer" item xs={12}>
                        <SliderContainer />
                    </Grid>
                </Grid>       
                <Grid xs={12} >   
                        <CheckBoxWave className="checkboxcontainer" />
               </Grid>  
               <Grid container direction="row" spacing={0}>
                   <Grid item xs={20}>
                    <Keyboard2 className="kb" />
                    </Grid>
                </Grid>

            </Container>
        </SynthContext.Provider>
    );
}

export default SynthPage;
