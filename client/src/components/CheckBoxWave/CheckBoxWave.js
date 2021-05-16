import React from "react";
import Grid from "@material-ui/core/Grid";
import "./CheckBoxWave.css";


const CheckBoxWave = () => {
  return (
    <div className="checkboxcontainer">
      <Grid container spacting={1} alignItems="left">
        <div className="grid">
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
          <label for="vehicle1"> Sine</label>
          <br />
          <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
          <label for="vehicle2"> Sawtooth</label>
          <br />
          <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
            <label for="vehicle3"> Square</label>
            <br />
            <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
            <label for="vehicle3"> Triangle</label>
            <br />
      </div>
      </Grid>
        </div>

  );
}

export default CheckBoxWave;
