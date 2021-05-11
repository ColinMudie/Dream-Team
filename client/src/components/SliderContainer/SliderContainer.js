import React from "react";
import Slider from "../Slider/Slider";
import slidersObj from "../../utils/slidersObj";
import Grid from "@material-ui/core/Grid";

const SliderContainer = () => {
    return (
        <div className="container">
            <Grid container spacing={1}
            direction="row"
            justify="flex-start"
            alignItmes ="flex-start">
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
