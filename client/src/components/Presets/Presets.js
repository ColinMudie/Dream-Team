import React, { useState, useContext, useEffect } from 'react';
import './Presets.css';
import Obj from './dummyObj';
import { IoMdArrowDropdown } from 'react-icons/io';
import { IoMdArrowDropup } from 'react-icons/io';
import SynthContext from '../../utils/SynthContext';
import API from "../../utils/API";

const Presets = ({ title, items = Obj, multiselect = false }) => {
    const [presets, setPresets] = useState([]);
    const { attack, setAttack, decay, setDecay, filter, setFilter, volume, setVolume } = useContext(SynthContext);
    const [open, setOpen] = useState(false);
    const [selection, setSelection] = useState([]);
    const [currentPreset, setCurrentPreset] = useState({});
    const toggle = () => setOpen(!open);
    const currentUser = JSON.parse(localStorage.getItem("user"));


    function handleOnClick(item) {
        if (!selection.some(current => current.id === item.id)) {
            setSelection([item]);
            // setCurrentPreset(presets[item.id-1])
            console.log(currentPreset);
            // savePresets(item.id-1)
            // loadPresets()
            loadSinglePreset(item.id-1)
        }
    }

    useEffect(() => {
        loadPresets()
        console.log(presets);
    }, [])

    useEffect(() => {
        setCurrentPreset({
            attack: attack,
            decay: decay,
            filter: filter
        })
    }, [attack, decay, filter])

    function loadPresets () {
        // gets called on page load 
        API.getPresets(currentUser.id)
        .then(res => {
            console.log(res);
            setPresets(res.data.presets)
        })
        .catch(err => console.log(err))
    }

    function loadSinglePreset (index) {
        // gets called on the load button for a preset with the index of the correct preset
        setCurrentPreset(presets[index])
        setAttack(currentPreset.attack)
        setDecay(currentPreset.decay)
        setFilter(currentPreset.filter)
        
        console.log(currentPreset);
        console.log(presets[index]);
    }

    function savePresets (index) {
        // gets called on save button click with the index = correct preset 
        //index = item.id-1 of handleOnClick
        presets[index] = currentPreset
        console.log(presets);
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
