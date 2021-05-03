import React  from "react";
// import styled from "styled-components";
// const Styles = styled.div ``;
import SliderObj from ".../utils/SliderObj";

function Slider (props) {
    // state = {
    //     value: 100
    // }

    // handleOnChange = (e) => this.setState({ value: e.target.value })
    // render (props){
        return (
            
            <div className="slider">
                <input className="slider" type="range"
                    min={props.range.min}
                    max={props.range.max}
                    value={this.state.value}
                    onChange={this.handleOnChange} />
                <div className="value">{this.state.value}</div>
            </div>
        
        )
    
}

export default Slider;