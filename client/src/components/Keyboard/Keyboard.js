import React from 'react';
import BlackRow from '../BlackRow/BlackRow';
import WhiteRow from '../WhiteRow/WhiteRow';
// import Container from '@material-ui/core/Container';
import Grid from "@material-ui/core/Grid";
import './Keyboard.css';

function Keyboard() {
    return (
       
            <Grid>
                <div className="keyboard">
                    <BlackRow/>
                    <WhiteRow />
                </div>
            </Grid>
       
    );
}

export default Keyboard;
