import React from "react";
// import Grid from "@material-ui/core/Grid";
// import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import Grid from "@material-ui/core/Grid";

import "./CheckBoxWave.css";
// import ReactDom from "react-dom";


function CheckBoxWave(props) {
  const handleChange = (event) => {

  };
  return (
    <div className="checkboxcontainer">
      <Grid container xs={12} spacing={1} direction="row" justify="flex-end" alignItmes="flex-end">
        <FormControl component="fieldset">
          <Grid item xs={1} direction="row">
            <FormLabel className="waveheader" component="legend">Wave</FormLabel>
          </Grid>
          <Grid container xs={12} spacing={1} direction="row" justify="flex-end" alignItmes="flex-end">
          <RadioGroup aria-label="wave" name="wave1" value={props.value} onChange={handleChange}>
            <Grid item xs={1} direction="row">
              <FormControlLabel value="sine" control={<Radio />} label="Sine" />
            </Grid>
            <Grid item xs={1} direction="row">
              <FormControlLabel value="sawtooth" control={<Radio />} label="Sawtooth" />
            </Grid>
            <Grid item xs={1} direction="row">
              <FormControlLabel value="square" control={<Radio />} label="Square" />
            </Grid>
            <Grid item xs={1} direction="row">
              <FormControlLabel value="triangle" control={<Radio />} label="Triangle" />
            </Grid>
          </RadioGroup>
          </Grid>
        </FormControl>
      </Grid>
    </div>
    //   <div className="grid">
    //   <Grid container className="checkboxcontainer" xs={12} spacing={1} direction="row" justify="flex-end" alignItmes="flex-end">
    //     <Typography  justify="flex-end" className="waveheader" xs={5}>
    //       <h3>Wave</h3>
    //     </Typography>

    //     <Grid item xs={1} direction="row">
    //       <input type="checkbox" name="sine" value={1} checked={checked === 1} onChange={e => onUpdate({ checked: +e.target.value })} />
    //       <br />
    //       <label for="Sine"> Sine</label>
    //     </Grid>
    //     <Grid item xs={1} direction="row">
    //       <input type="checkbox" name="sawtooth" value={2} checked={checked === 2} onChange={e => onUpdate({ checked: +e.target.value })} />
    //       <br />
    //       <label for="Sawtooth"> Sawtooth</label>

    //     </Grid>
    //     <Grid item xs={1} direction="row">
    //       <input type="checkbox" name="square" value={3} checked={checked === 3} onChange={e => onUpdate({ checked: +e.target.value })} />
    //       <br />
    //       <label for="Square"> Square</label>

    //     </Grid>
    //     <Grid item xs={1} direction="row">
    //       <input type="checkbox" name="Triangle" value={4} checked={checked === 4} onChange={e => onUpdate({ checked: +e.target.value })} />
    //       <br />
    //       <label for="Triangle"> Triangle</label>

    //     </Grid>
    //   </Grid>

    // </div>

  )
}



export default CheckBoxWave;
