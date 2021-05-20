import React from "react";
import Slider from "../Slider/Slider";
import slidersObj from "../../utils/slidersObj";
import Grid from "@material-ui/core/Grid";

const SliderContainer = () => {
    return (
        <div className="slider-container">
            <Grid container spacing={0}
            direction="row"
            alignItems="center"
            >
                {slidersObj.map((obj) => {
                    return (
                        <Grid item xs={6}>
                        <Slider
                            type={obj.type}
                            name={obj.name}
                            min={obj.min}
                            max={obj.max}
                            value={obj.value} />
                            </Grid>

                    );
                }
                )
                }
                </Grid>
            </div>
        
    )
}
export default SliderContainer;
