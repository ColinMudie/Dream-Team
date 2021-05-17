import React, {useContext} from "react";

// import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Radio from "@material-ui/core/Radio";
import Grid from "@material-ui/core/Grid";
import SynthContext from "../../utils/SynthContext";

import "./CheckBoxWave.css";
// import ReactDom from "react-dom";


function CheckBoxWave() {
  const {parameters} = useContext(SynthContext);

    
    const handleChange = (event) => {
      parameters.setWaveShape(event.target.value);
      
    };
  
    return (
      <div>
        <Grid container className="checkboxcontainer" xs={12} spacing={1} direction="row" justify="flex-end" alignItmes="flex-end">
        <Typography  justify="flex-end" className="waveheader" xs={5}>
     <h3>Wave</h3>
    </Typography>
        <Radio
        className="radiocomp"
          checked={parameters.waveShape === "sine"}
          onChange={handleChange}
          value="sine"
          name="sine"
          inputProps={{ 'aria-label': 'A' }}
        />
        <label for="Sine"> Sine</label>
        <Radio
        className="radiocomp"
          checked={parameters.waveShape === "sawtooth"}
          onChange={handleChange}
          value="sawtooth"
          name="Sawtooth"
          inputProps={{ 'aria-label': 'B' }}
        />
        <label for="Sawtooth"> Sawtooth</label>
        
        <Radio
        className="radiocomp"
          checked={parameters.waveShape === "square"}
          onChange={handleChange}
          value="square"
          name="radio-button-demo"
          label="square"
          inputProps={{ 'aria-label': 'square' }}
        />
        <label for="Square"> Square</label>
        
        <Radio
        className="radiocomp"
          checked={parameters.waveShape === "triangle"}
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
