import React from 'react';
import PropTypes from 'prop-types';
import { TextField, Typography, Button } from '@material-ui/core';
import { Slider } from '@material-ui/lab';
import './Form.css';

const Form = ({ onCoefChange, onSliderChange, onProcess, fieldInput, imgSrc }) => (
  <>
    <div className="form-slider-wrapper">
      <Typography gutterBottom>Scale</Typography>
      <Slider onChange={onSliderChange('scale')} value={fieldInput.scale} max={10} min={0} />
    </div>
    <div className="form-slider-wrapper">
      <Typography gutterBottom>X position</Typography>
      <Slider onChange={onSliderChange('x')} value={fieldInput.x} max={10} min={0} />
    </div>
    <div className="form-slider-wrapper">
      <Typography gutterBottom>Y Position</Typography>
      <Slider onChange={onSliderChange('y')} value={fieldInput.y} max={10} min={0} />
    </div>
    <TextField
      label="Border"
      onChange={onCoefChange}
      value={fieldInput.border}
      name="border"
      margin="dense"
      fullWidth
    />
    <TextField
      label="Height"
      onChange={onCoefChange}
      value={fieldInput.height}
      name="height"
      margin="dense"
      fullWidth
    />
    <TextField
      label="Width"
      onChange={onCoefChange}
      value={fieldInput.width}
      name="width"
      margin="dense"
      fullWidth
    />
    <TextField
      label="Rotate"
      onChange={onCoefChange}
      value={fieldInput.rotate}
      name="rotate"
      margin="dense"
      fullWidth
    />
    <Button color="primary" className="form-download-button" onClick={onProcess}>
      Process image
    </Button>
    <Button
      variant="contained"
      color="primary"
      className="form-download-button"
      component="a"
      download
      href={imgSrc}
    >
      Download image
    </Button>
  </>
);

Form.propTypes = {
  onProcess: PropTypes.func.isRequired,
  onSliderChange: PropTypes.func.isRequired,
  onCoefChange: PropTypes.func.isRequired,
  fieldInput: PropTypes.object.isRequired,
  imgSrc: PropTypes.string,
};

export default Form;
