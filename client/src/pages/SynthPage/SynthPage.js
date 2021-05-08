import React from 'react';
import Keyboard from '../../Components/Keyboard/Keyboard';
import Button from '../../Components/Button/Button';
import Presets from '../../Components/Presets/Presets';
import SliderContainer from '../../Components/SliderContainer/SliderContainer';
import 'materialize-css';
import { Row, Col, Container } from 'react-materialize';
import './SynthPage.css';

const SynthPage = () => {
    return (
        <>
        <Container className="synth">

        <Row>
            <Col className= "col s6">
                <p className="logo">dt-1</p>
            </Col>
            <Col className = "col s6">
        <Button value="Sign Up" />
        <Button value="Sign Up" />
        </Col>
        </Row>

        <Row className="preslide">
            <Col className = "col s2 presets">
        <Presets />
        <Presets />
        </Col>
        <Col className = "col s6 slider">
        <SliderContainer />
        </Col>
        </Row>

        <Row>
            <Col className = "col s12">
        <Keyboard className="keyboard" />
        </Col>
        </Row>
        </Container>

        <div className="bg"></div>
        </>
    );
}

export default SynthPage;