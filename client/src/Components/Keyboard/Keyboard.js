import React from 'react';
import BlackRow from '../BlackRow/BlackRow';
import WhiteRow from '../WhiteRow/WhiteRow';
import {Box, Container} from '@material-ui/core';
import './Keyboard.css';

function Keyboard() {
    return (
        <Container>
            <Box>
                <div className="keyboard">
                    <BlackRow />
                    <WhiteRow />
                </div>
            </Box>
        </Container>
    );
}

export default Keyboard;