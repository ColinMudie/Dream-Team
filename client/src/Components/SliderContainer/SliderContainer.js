import React from "react";
import Slider from "../Slider/Slider";
import slidersObj from "../../utils/slidersObj";
import { Row, Col, Container } from 'react-materialize';

const SliderContainer = () => {
    return (
        <Container className="container">
            <Row className="row">
                <Col className="col sm8">
                {slidersObj.map((obj) => {
                    return (
                        <Slider
                            type={obj.type}
                            name={obj.name}
                            min={obj.min}
                            max={obj.max}
                            value={obj.value} />

                    );
                }
                )
                }
                </Col>
            </Row>
        </Container>
    )
}
export default SliderContainer;