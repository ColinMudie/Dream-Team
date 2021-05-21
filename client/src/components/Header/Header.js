import React from 'react';
import ButtonLogOut from '../ButtonLogOut/ButtonLogOut';
import './Header.css';
import { Box, Typography } from '@material-ui/core';
import Presets from '../Presets/Presets';
import '../Presets/Presets.css';


const Header = () => {

    return (
        <div className="head">

            <Box container spacing={20}>
                <Typography className="logo" variant="h3" gutterBottom>
                    dt-1
                </Typography>

                
                <div className="buttons">
                    <Presets className="presets" />
                    <ButtonLogOut className="logout" value="Logout" />
                </div>
            </Box >
        </div >
    );
}

export default Header;
