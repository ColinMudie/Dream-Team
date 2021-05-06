import React from 'react';
import BlackRow from '../BlackRow/BlackRow';
import WhiteRow from '../WhiteRow/WhiteRow';
import 'materialize-css';
import { Row, Col, Container } from 'react-materialize';
import './Keyboard.css';

function Keyboard() {
    return (
        <Container>
            <Row>
                <Col className="col s12 keyboard">
                    <BlackRow />
                    <WhiteRow />
                </Col>
            </Row>
        </Container>
    );
}

export default Keyboard;