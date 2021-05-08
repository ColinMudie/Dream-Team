import React, { useState, useContext } from 'react';
import './Presets.css';
import Obj from './dummyObj';
import { IoMdArrowDropdown } from 'react-icons/io';
import { IoMdArrowDropup } from 'react-icons/io';
import SynthContext from '../../utils/SynthContext';

const Presets = ({ title, items = Obj, multiselect = false }) => {
    const { attack, setAttack, decay, setDecay, filter, setFilter, volume, setVolume } = useContext(SynthContext);
    const [open, setOpen] = useState(false);
    const [selection, setSelection] = useState([]);
    const toggle = () => setOpen(!open);

    function handleOnClick(item) {
        if (!selection.some(current => current.id === item.id)) {
            setSelection([item]);
        }
    }

    return (
        <div className="dd-wrapper">
            <div tabIndex={0} 
            className="dd-header" 
            role='button' 
            onKeyPress={() => toggle(!open)} 
            onClick={() => toggle(!open)}
            >
                <div className="dd-header_title">
                    <p className="dd-header_title--bold">Presets</p>
                </div>
                <div className="dd-header_action">
                    <p>{open ? [IoMdArrowDropdown] : [IoMdArrowDropup]}</p>
                </div>
            </div>
            {open && (
                <ul className="dd-items">
                    {items.map(item => (
                        <li className="dd-list-item" key={item.id}>
                            <button className="btn" value={item.value} onClick={() => handleOnClick(item)}> 
                            <span>{item.value}</span>
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Presets;