import React, { useContext } from 'react';
import './ButtonLogOut.css';
import API from '../../utils/API';
import LogInContext from "../../utils/LogInContext";

const ButtonLogOut = ({value, onClick}) => {
    const { setIsLoggedIn } = useContext(LogInContext);
    const handleOnClick = () => {
        console.log('logout');
        API.logout();
        setIsLoggedIn(false)
    }

    return (
    <button className='btn'onClick={handleOnClick} >
        {value}
    </button>
    );
};

export default ButtonLogOut;
