import React from "react";

// import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
// import FormControl from "@material-ui/core/FormControl";
// import FormLabel from "@material-ui/core/FormLabel";
// import RadioGroup from "@material-ui/core/RadioGroup";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import Grid from "@material-ui/core/Grid";

import "./CheckBoxWave.css";
// import ReactDom from "react-dom";


function CheckBoxWave() {

    const [selectedValue, setSelectedValue] = React.useState('a');

    const handleChange = (event) => {
      setSelectedValue(event.target.value);
      //below is listed as possible inline function for value when radio is choosen
      // {e => onUpdate({ checked: +e.target.value })
    };
  
    return (
      <div>
        <Grid container className="checkboxcontainer" xs={12} spacing={1} direction="row" justify="flex-end" alignItmes="flex-end">
        <Typography  justify="flex-end" className="waveheader" xs={5}>
     <h3>Wave</h3>
    </Typography>
        <Radio
        className="radiocomp"
          checked={selectedValue === "sine"}
          onChange={handleChange}
          value="sine"
          name="sine"
          inputProps={{ 'aria-label': 'A' }}
        />
        <label for="Sine"> Sine</label>
        <Radio
        className="radiocomp"
          checked={selectedValue === "sawtooth"}
          onChange={handleChange}
          value="sawtooth"
          name="Sawtooth"
          inputProps={{ 'aria-label': 'B' }}
        />
        <label for="Sawtooth"> Sawtooth</label>
        
        <Radio
        className="radiocomp"
          checked={selectedValue === "square"}
          onChange={handleChange}
          value="square"
          name="radio-button-demo"
          label="square"
          inputProps={{ 'aria-label': 'D' }}
        />
        <label for="Square"> Square</label>
        
        <Radio
        className="radiocomp"
          checked={selectedValue === "triangle"}
          onChange={handleChange}
          value="triangle"
          name="triangle"
          inputProps={{ 'aria-label': 'E' }}
          
        />
         <label for="Triangle"> Triangle</label>
 </Grid>
     </div>
   
  );
}



export default CheckBoxWave;
