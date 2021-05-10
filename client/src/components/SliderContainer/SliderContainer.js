import React from "react";
import Slider from "../Slider/Slider";
import slidersObj from "../../utils/slidersObj";

const SliderContainer = () => {
    return (
        <div className="container">
            <div className="row">
                {slidersObj.map((obj) => {
                    return (
                        <Slider
                            type={obj.type}
                            name={obj.name}
                            min={obj.min}
                            max={obj.max}
                            value={obj.value} />

                    );
                }
                )
                }
            </div>
        </div>
    )
}
export default SliderContainer;
