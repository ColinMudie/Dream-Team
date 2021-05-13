import React from 'react';
import './SaveButton.css';

const SaveButton = ({value, onClick}) => {
    return (
    <button className='save-btn'>
        {value}
    </button>
    );
};

export default SaveButton;