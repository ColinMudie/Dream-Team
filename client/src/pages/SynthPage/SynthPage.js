import React from 'react';
import "./SynthPage.css";
import Keyboard from '../../components/Keyboard/Keyboard';
import Button from '../../components/Button/Button';
import Presets from '../../components/Presets/Presets';
import SliderContainer from '../../components/SliderContainer/SliderContainer';
import Header from '../../components/Header/Header';
import {Box, Container} from '@material-ui/core';

const SynthPage = () => {

    // here is where we will check out isLoggedIn state to see if the user is allowed to be here or 
    // needs to be redirected to login if the state is false.

     // if (!isLoggedIn){
    //     return <Redirect to="/login"/>
    // }
    
    return (
        <>
            <Header />
            <Container>
                <Box>
                    <SliderContainer />
                </Box>

                <Box>
                    <Presets />
                </Box>

                <Box>
                    <Keyboard />
                </Box>
            </Container>
        </>
    );
}

export default SynthPage;