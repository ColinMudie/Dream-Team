import React from 'react';
import Keyboard from '../../Components/Keyboard/Keyboard';
import Presets from '../../Components/Presets/Presets';
import SliderContainer from '../../Components/SliderContainer/SliderContainer';
import Header from '../../Components/Header/Header';
import 'materialize-css';
import { Row, Col, Container } from 'react-materialize';

const SynthPage = () => {
    return (
        <>
            <Header />
            <Container>
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
        </>
    );
}

export default SynthPage;