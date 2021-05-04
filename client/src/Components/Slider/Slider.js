import React, {useState} from "react";




 
function Slider(props) {
    const [value, setValue] = useState(0);

    function slide() {
        setValue(value);
    }
    return(
        <input type="range" min={props.min} max={props.max} value={props.useState.value} className="slider" onChange={slide} />
    )
    
}

           export default Slider;
