import React from 'react';
import './ButtonLogOut.css';

const ButtonLogOut = ({value, onClick}) => {
    return (
    <button className='btn'>
        {value}
    </button>
    );
};

export default ButtonLogOut;
