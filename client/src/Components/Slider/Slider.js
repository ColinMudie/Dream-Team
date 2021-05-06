import React from "react";
import "./Slider.css";

function Slider(props){
    return (
            <div className="slider-div">
            <h4>{props.name}</h4>
            <input className="slider" type={props.type} min={props.min} max={props.max} value={props.value}></input>
            </div>
            
            )
        }
    
export default Slider;