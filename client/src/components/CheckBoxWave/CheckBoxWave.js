import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import "./CheckBoxWave.css";


const CheckBoxWave = (props) => {

  return (

    <div className="grid">
      <Grid container className="checkboxcontainer" xs={12} spacing={1} direction="row" justify="flex-end" alignItmes="flex-end">
        <Typography item direction="column"  justify="flex-end" className="waveheader" xs={5}>
          <h3>Wave</h3>
        </Typography>

        <Grid item xs={1} direction="column">
          <input type="checkbox" id={props.sine} />
          <br />
          <label for="Sine"> Sine</label>
        </Grid>
        <Grid item xs={1} direction="column">
          <input type="checkbox" id={props.sawtooth} />
          <br />
          <label for="Sawtooth"> Sawtooth</label>

        </Grid>
        <Grid item xs={1} direction="column">
          <input type="checkbox" id={props.square} />
          <br />
          <label for="Square"> Square</label>

        </Grid>
        <Grid item xs={1} direction="column">
          <input type="checkbox" id={props.triangle} />
          <br />
          <label for="Triangle"> Triangle</label>

        </Grid>
      </Grid>

    </div>
  );
}

export default CheckBoxWave;
