import React from 'react';
import Button from '../Button/Button';
import './Header.css';
import {Box, Typography} from '@material-ui/core';

const Header = () => {
    return (
        <div className="head">
            
            <Box container spacing={20}>
            <Typography className="logo" variant="h3" gutterBottom>
                dt-1
            </Typography>
            <div className="button">
                <Button value="Logout" />
                </div>
            </Box >
        </div >
    );
}

export default Header;
