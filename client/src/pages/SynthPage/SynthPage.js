import React from 'react';
import Keyboard from '../../components/Keyboard/Keyboard';
import Button from '../../components/Button/Button';
import Presets from '../../components/Presets/Presets';
import SliderContainer from '../../components/SliderContainer/SliderContainer';
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