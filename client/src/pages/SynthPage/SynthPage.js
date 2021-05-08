import React from 'react';
import "./SynthPage.css";
import Keyboard from '../../components/Keyboard/Keyboard';
import Presets from '../../components/Presets/Presets';
import SliderContainer from '../../components/SliderContainer/SliderContainer';
import Header from '../../components/Header/Header';
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