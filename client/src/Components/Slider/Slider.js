import React from 'react';
import "./Slider.css";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';



function InputSlider() {
        
        const useStyles = makeStyles({
            root: {
              width: 200,
            },
          });
          const classes = useStyles();
        const [value, setValue] = React.useState(30);
      
        const handleSliderChange = (event, newValue) => {
          setValue(newValue);
        };
      
        const handleInputChange = (event) => {
          setValue(event.target.value === '' ? '' : Number(event.target.value));
          //check props.name for correct linking
          switch (props.name) {
            case "Attack":
                setAttack(event.target.value)
                break;

            case "Decay":
                setDecay(event.target.value)
                break;

            case "Filter":
                setFilter(event.target.value)
                break;

            case "Volume":
                setVolume(event.target.value)
                break;

            default:
                break;
        }
        };
      
        const handleBlur = () => {
          if (value < 0) {
            setValue(0);
          } else if (value > 100) {
            setValue(100);
          }
        };
      
        return (
          <div className={classes.root}>
            <Typography id="input-slider" gutterBottom>
              Volume
            </Typography>
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                
              </Grid>
              <Grid item xs>
                <Slider
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