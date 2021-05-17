import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import "./CheckBoxWave.css";


const CheckBoxWave = () => {
  return (

    <div className="grid">
  <Grid container xs={12} spacing={8} direction="row" justify="flex-end" alignItmes="flex-end">
        <Grid item xs={2} direction="row">
          <Typography className="waveheader">
            <h3>Wave</h3>
          </Typography>
        </Grid>
        <Grid item xs={2} direction="row">
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
          <label for="vehicle1"> Sine</label>
          </Grid>
        <Grid item xs={2} direction="row">
          <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
          <label for="vehicle2"> Sawtooth</label>
         
        </Grid>
        <Grid item xs={2} direction="column">
          <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
          <label for="vehicle3"> Square</label>
         
        </Grid>
        <Grid item xs={2} direction="column">
          <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
          <label for="vehicle3"> Triangle</label>
          
        </Grid>
      </Grid>

    </div>


  );
}

export default CheckBoxWave;
