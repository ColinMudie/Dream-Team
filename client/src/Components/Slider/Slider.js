import React, { useContext } from "react";
import "./Slider.css";
import SynthContext from '../../utils/SynthContext';

function Slider(props){
    const { attack, setAttack, decay, setDecay, filter, setFilter, volume, setVolume } = useContext(SynthContext);
    const handleInputChange = (event) => {
        // hopefully, on input change, we will update the state of the currently moved slider by using props.name 
        // to determine which state needs to change. subject to change when we update the sliders.
        switch (props.name) {
            case "Attack":
                setAttack(event.target.value)
                break;

            case "Decay":
                setDecay(event.target.value)
                break;

            case "Filter":
                setFilter(event.target.value)
                break;

            case "Volume":
                setVolume(event.target.value)
                break;

            default:
                break;
        }
    } 
    return (
            <div className="slider-div">
            <h4>{props.name}</h4>
            <input className="slider" id="slider" type={props.type} min={props.min} max={props.max} value={props.value} onChange={handleInputChange}></input>
            </div>
            
            )
        }
    
export default Slider;