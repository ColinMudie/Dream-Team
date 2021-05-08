import React from './react';
import Button from '../Button/Button';
import 'materialize-css';
import { Row, Col } from 'react-materialize';

const Header = () => {
    return (
        <Row>
            <Col className="col sm6">
                <h1 className="logo">dt-1</h1>
            </Col>

            <Col className="col sm 6">
                <Button value="Sign Up" />
                <Button value="Sign Up" />
            </Col>
        </Row>
    );
}

export default Header;