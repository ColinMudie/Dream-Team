import React from "react"

class Slider extends React.component {
    state = {
        value: 50
    }

    handleOnChange = (e) => this.setState({value: e.target.value})
    render() {
        return (
            <div>
                <input className="slider" type="range" 
                min={props.range.min} 
                max={props.range.max} 
                value={this.state.value} 
                onChange={this.handleOnChange} />
                <div className="value">{this.state.value</div>
            </div>

        )
    }

}}


export default Slider;