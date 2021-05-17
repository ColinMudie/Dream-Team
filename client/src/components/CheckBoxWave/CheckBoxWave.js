import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import "./CheckBoxWave.css";
// import ReactDom from "react-dom";


function CheckBoxWave ({ checked, onUpdate }) {
return (
      <div className="grid">
      <Grid container className="checkboxcontainer" xs={12} spacing={1} direction="row" justify="flex-end" alignItmes="flex-end">
        <Typography item direction="column"  justify="flex-end" className="waveheader" xs={5}>
          <h3>Wave</h3>
        </Typography>

        <Grid item xs={1} direction="column">
          <input type="checkbox" name="sine" value={1} checked={checked === 1} onChange={e => onUpdate({ checked: +e.target.value })} />
          <br />
          <label for="Sine"> Sine</label>
        </Grid>
        <Grid item xs={1} direction="column">
          <input type="checkbox" name="sawtooth" value={2} checked={checked === 2} onChange={e => onUpdate({ checked: +e.target.value })} />
          <br />
          <label for="Sawtooth"> Sawtooth</label>

        </Grid>
        <Grid item xs={1} direction="column">
          <input type="checkbox" name="square" value={3} checked={checked === 3} onChange={e => onUpdate({ checked: +e.target.value })} />
          <br />
          <label for="Square"> Square</label>

        </Grid>
        <Grid item xs={1} direction="column">
          <input type="checkbox" name="Triangle" value={4} checked={checked === 4} onChange={e => onUpdate({ checked: +e.target.value })} />
          <br />
          <label for="Triangle"> Triangle</label>

        </Grid>
      </Grid>

    </div>

    )
  }
 


export default CheckBoxWave;
