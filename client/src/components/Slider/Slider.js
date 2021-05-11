import React, {useContext, useEffect, } from 'react';
import "./Slider.css";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';
import SynthContext from "../../utils/SynthContext";



function InputSlider(props) {
  const { attack, setAttack, decay, setDecay, filter, setFilter, volume, setVolume } = useContext(SynthContext);
        
        const useStyles = makeStyles({
            root: {
              width: 200,
            },
          });
          const classes = useStyles();
        const [value, setValue] = React.useState(30);
      
        const handleSliderChange = (event, newValue) => {
          setValue(newValue);
          updateState(event, newValue);
        };
      
        const handleInputChange = (event) => {
          setValue(event.target.value === '' ? '' : Number(event.target.value));
          //check props.name for correct linking
          updateState(event, event.target.value)
        };

        const updateState = (event, value) => {
          switch (props.name) {
            case "Attack":
              setAttack(value)
              break;

            case "Decay":
              setDecay(value)
              break;

            case "Filter":
              setFilter(value)
              break;

            case "Volume":
              setVolume(value)
              break;

            default:
              break;
          }
        }
      
        const handleBlur = () => {
          if (value < 0) {
            setValue(0);
          } else if (value > 100) {
            setValue(100);
          }
        };
      
        useEffect(() => {
          console.log(props.name);
          switch (props.name) {
            case "Attack":
              console.log(attack);
              setValue(attack)
              break;

            case "Decay":
              setValue(decay)
              break;

            case "Filter":
              setValue(filter)
              break;

            default:
              break;
          }
        }, [attack, decay, filter])

        return (
          <div className={classes.root}>
            <Typography className="sliderheader" id="input-slider" gutterBottom>
              {props.name}
            </Typography>
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                
              </Grid>
              <Grid item xs>
                <Slider className="slideval"
                  value={typeof value === 'number' ? value : 0}
                  onChange={handleSliderChange}
                  aria-labelledby="input-slider"
                />
              </Grid>
              <Grid item>
                <Input
                  className={classes.input}
                  value={value}
                  margin="dense"
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  inputProps={{
                    step: 10,
                    min: 0,
                    max: 100,
                    type: 'number',
                    'aria-labelledby': 'input-slider',
                  }}
                />
              </Grid>
            </Grid>
          </div>
        );
      }
    
export default InputSlider;
