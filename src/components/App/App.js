import React, { Component } from 'react';
import { Grid, Typography } from '@material-ui/core';
import Form from '../Form';
import ImageEditor from '../ImageEditor';
import ImageUploader from '../ImageUploader';
import { IMAGE_MAX_SIZE, ACCEPTED_FILE_TYPES } from './constants';
import './App.css';

class App extends Component {
  editorRef = null;

  state = {
    imgSrc: null,
    imgSrcExt: null,
    finalImgSrc: null,
    fieldInput: {
      border: 0,
      rotate: 0,
      scale: 10,
      x: 5,
      y: 5,
      height: 250,
      width: 250,
    },
  };

  handleClickImageUploader = e => e.preventDefault();

  handleDropImageUploader = acceptedFiles => {
    const currentFile = acceptedFiles[0];
    const fileItemReader = new FileReader();

    fileItemReader.addEventListener(
      'load',
      () => {
        const imgSrc = fileItemReader.result;
        const imgSrcExt = imgSrc.substring('data:image/'.length, imgSrc.indexOf(';base64'));
        this.setState({
          imgSrc,
          imgSrcExt,
        });
      },
      false,
    );

    fileItemReader.readAsDataURL(currentFile);
  };

  handleCoefChange = e => {
    const coef = e.target.value;
    const parsedCoef = coef === '' ? 0 : parseInt(e.target.value);
    const coefName = e.target.name;

    this.setState(prevState => ({
      ...prevState,
      fieldInput: {
        ...prevState.fieldInput,
        [coefName]: parsedCoef,
      },
    }));
  };

  handleSliderChange = name => (_, value) => {
    let parsedCoef = value === '' ? 0 : parseInt(value);

    this.setState(prevState => ({
      ...prevState,
      fieldInput: {
        ...prevState.fieldInput,
        [name]: parsedCoef,
      },
    }));
  };

  handlePositionChange = position => {
    this.setState(prevState => ({
      ...prevState,
      fieldInput: {
        ...prevState.fieldInput,
        x: position.x * 10,
        y: position.y * 10,
      },
    }));
  };

  handleProcess = e => {
    if (this.editorRef) {
      const canvasScaled = this.editorRef.getImageScaledToCanvas();

      const finalImgSrc = canvasScaled.toDataURL(`image/${this.state.imgSrcExt}`);

      this.setState({
        finalImgSrc,
      });
    }
  };

  setEditorRef = x => (this.editorRef = x);

  render() {
    const { imgSrc, fieldInput, finalImgSrc } = this.state;

    const newPosition = {
      x: fieldInput.x / 10,
      y: fieldInput.y / 10,
    };

    return (
      <Grid container justify="center" className="app-wrapper">
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to react-resize-crop!
        </Typography>
        <Grid item xs={6}>
          {imgSrc ? (
            <Form
              imgSrc={finalImgSrc}
              onCoefChange={this.handleCoefChange}
              onSliderChange={this.handleSliderChange}
              onProcess={this.handleProcess}
              fieldInput={fieldInput}
            />
          ) : (
            <Grid container justify="center" alignItems="center" className="editor-placeholder">
              <Typography variant="h5">Editor will appear when image is uploaded</Typography>
            </Grid>
          )}
        </Grid>
        <Grid item xs={6} container justify="center">
          {imgSrc ? (
            <ImageEditor
              imgSrc={imgSrc}
              setEditorRef={this.setEditorRef}
              border={fieldInput.border}
              rotate={fieldInput.rotate}
              scale={fieldInput.scale / 10}
              position={newPosition}
              height={fieldInput.height}
              width={fieldInput.width}
              onPositionChange={this.handlePositionChange}
            />
          ) : (
            <ImageUploader
              onDrop={this.handleDropImageUploader}
              onClick={this.handleClickImageUploader}
              acceptedFileTypes={ACCEPTED_FILE_TYPES}
              maxSize={IMAGE_MAX_SIZE}
            />
          )}
        </Grid>
      </Grid>
    );
  }
}

export default App;
