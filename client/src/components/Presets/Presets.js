import React, { useState, useContext, useEffect } from 'react';
import './Presets.css';
import Obj from './dummyObj';
import { IoMdArrowDropdown } from 'react-icons/io';
import { IoMdArrowDropup } from 'react-icons/io';
import SynthContext from '../../utils/SynthContext';
import API from "../../utils/API";
import SaveButton from '../SaveButton/SaveButton';

const Presets = ({ title, items = Obj, multiselect = false }) => {
    const [presets, setPresets] = useState([]);
    const { parameters } = useContext(SynthContext);
    const [open, setOpen] = useState(false);
    const [selection, setSelection] = useState([]);
    const [currentPreset, setCurrentPreset] = useState({});
    const toggle = () => setOpen(!open);
    const currentUser = JSON.parse(localStorage.getItem("user"));


    function handleOnClick(item) {
        if (!selection.some(current => current.id === item.id)) {
            setSelection([item]);
            loadSinglePreset(item.id-1)
        }
    }

    useEffect(() => {
        loadPresets()
    }, [])

    useEffect(() => {
        setCurrentPreset({
            attack: parameters.attack,
            decay: parameters.decay,
            filter: parameters.filter,
            waveShape: parameters.waveShape
        })
    }, [parameters.attack, parameters.decay, parameters.filter, parameters.waveShape])

    function loadPresets () {
        API.getPresets(currentUser.id)
        .then(res => {
            setPresets(res.data.presets)
        })
        .catch(err => console.log(err))
    }

    function loadSinglePreset (index) {
        setCurrentPreset(presets[index])
        parameters.setAttack(presets[index].attack)
        parameters.setDecay(presets[index].decay)
        parameters.setFilter(presets[index].filter)
        parameters.setWaveShape(presets[index].waveShape)
    }

    function savePresets (index) {
        presets[index] = currentPreset
        API.savePresets(currentUser.id, presets)
        .catch(err => console.log(err))
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
                            <button className="preset-btn" value={item.value} onClick={() => handleOnClick(item)}> 
                            <span>{item.value}
                            <SaveButton className="save-load" value="Save" onClick={() => savePresets(item.index)}></SaveButton>
                            <SaveButton className="save-load" value="Load" onClick={() => loadSinglePreset(item.index)}></SaveButton>
                            </span>
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Presets;
