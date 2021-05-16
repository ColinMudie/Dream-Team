import React from "react";
import Grid from "@material-ui/core/Grid";
import "./CheckBoxWave.css";


const CheckBoxWave = () => {
  return (
   
        <div className="grid">
          <Grid container xs={9} spacing={10} direction="row" justify="flex-end" alignItmes="flex-end">
          <Grid item xs={2} direction="row">
          <input type="checkbox" id="vehicle1"  name="vehicle1" value="Bike" />
          <label for="vehicle1"> Sine</label>
          <br /></Grid>
          <Grid item xs={2} direction="row">
          <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
          <label for="vehicle2"> Sawtooth</label>
          <br />
          </Grid>
          <Grid item xs={2} direction="column">
          <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
            <label for="vehicle3"> Square</label>
            <br />
            </Grid>
            <Grid item xs={2} direction="column">
            <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
            <label for="vehicle3"> Triangle</label>
            <br />
            </Grid>
            </Grid>
            
      </div>
      

  );
}

export default CheckBoxWave;
