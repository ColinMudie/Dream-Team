import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import "./CheckBoxWave.css";
// import ReactDom from "react-dom";


class CheckBoxWave extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedId: null,
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id, value) {
    this.setState({selectedId: value===true?id:null})
  }
  click(value) {
    this.props.handleChangess(this.state.fields.id, value);
  };

  selectOnlyThis(){

  }
  
  render(props) {
    return (
      <div className="grid">
      <Grid container className="checkboxcontainer" xs={12} spacing={1} direction="row" justify="flex-end" alignItmes="flex-end">
        <Typography item direction="column"  justify="flex-end" className="waveheader" xs={5}>
          <h3>Wave</h3>
        </Typography>

        <Grid item xs={1} direction="column">
          <input type="checkbox" class="radio" value="1" selectedId={this.state.selectedId} id="1" />
          <br />
          <label for="Sine"> Sine</label>
        </Grid>
        <Grid item xs={1} direction="column">
          <input type="checkbox" class="radio" value="1" selectedId={this.state.selectedId} id="2" />
          <br />
          <label for="Sawtooth"> Sawtooth</label>

        </Grid>
        <Grid item xs={1} direction="column">
          <input type="checkbox" class="radio" value="1" selectedId={this.state.selectedId} id="3" />
          <br />
          <label for="Square"> Square</label>

        </Grid>
        <Grid item xs={1} direction="column">
          <input type="checkbox" class="radio" value="1" selectedId={this.state.selectedId} id="4" />
          <br />
          <label for="Triangle"> Triangle</label>

        </Grid>
      </Grid>

    </div>

    )
  }
 


//the below property is what is rendering my original html return
  // return (

  //   <div className="grid">
  //     <Grid container className="checkboxcontainer" xs={12} spacing={1} direction="row" justify="flex-end" alignItmes="flex-end">
  //       <Typography item direction="column"  justify="flex-end" className="waveheader" xs={5}>
  //         <h3>Wave</h3>
  //       </Typography>

  //       <Grid item xs={1} direction="column">
  //         <input type="checkbox" class="radio" value="1" name="fooby[1][]" id={props.sine} />
  //         <br />
  //         <label for="Sine"> Sine</label>
  //       </Grid>
  //       <Grid item xs={1} direction="column">
  //         <input type="checkbox" class="radio" value="1" name="fooby[1][]" id={props.sawtooth} />
  //         <br />
  //         <label for="Sawtooth"> Sawtooth</label>

  //       </Grid>
  //       <Grid item xs={1} direction="column">
  //         <input type="checkbox" class="radio" value="1" name="fooby[1][]" id={props.square} />
  //         <br />
  //         <label for="Square"> Square</label>

  //       </Grid>
  //       <Grid item xs={1} direction="column">
  //         <input type="checkbox" class="radio" value="1" name="fooby[1][]" id={props.triangle} />
  //         <br />
  //         <label for="Triangle"> Triangle</label>

  //       </Grid>
  //     </Grid>

  //   </div>
  // );
}

export default CheckBoxWave;
