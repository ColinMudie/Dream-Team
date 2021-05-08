import React from 'react';
import Keyboard from '../../Components/Keyboard/Keyboard';
import Button from '../../Components/Button/Button';
import Presets from '../../Components/Presets/Presets';
import SliderContainer from '../../Components/SliderContainer/SliderContainer';
import 'materialize-css';
import { Row, Container } from 'react-materialize';

const SynthPage = () => {
    return (
        <Container>

        <Row>
        <Button value="Sign Up" />
        <Button value="Sign Up" />
        </Row>

        <Row>
        <SliderContainer />
        </Row>

         <Row>
       <Presets />
         </Row>

        <Row>
        <Keyboard />
        </Row>
        </Container>
    );
}

export default SynthPage;