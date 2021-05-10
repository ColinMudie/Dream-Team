import React from 'react';
import './Button.css';

const Button = ({value, onClick}) => {
    return (
    <button className='btn'>
        {value}
    </button>
    );
};


export default Button;
