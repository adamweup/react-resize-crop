import React, { Component } from "react";
import ReactAvatarEditor from "react-avatar-editor";
import { Grid, TextField, Typography } from "@material-ui/core";
import ImageFrame from "./ImageFrame";

const imageMaxSize = 1000000000; // bytes

const acceptedFileTypes = [
  "image/x-png",
  "image/png",
  "image/jpg",
  "image/jpeg",
  "image/gif"
];

class ImageApp extends Component {
  state = {
    imgSrc: null,
    allowZoomOut: false,
    position: { x: 0.5, y: 0.5 },
    scale: 1,
    rotate: 0,
    borderRadius: 0,
    preview: null,
    width: 200,
    height: 200
  };

  handleClick = e => e.preventDefault();

  handleDrop = acceptedFiles => {
    const currentFile = acceptedFiles[0];
    const fileItemReader = new FileReader();

    fileItemReader.addEventListener(
      "load",
      () => {
        const imgSrc = fileItemReader.result;
        this.setState({
          imgSrc
        });
      },
      false
    );

    fileItemReader.readAsDataURL(currentFile);
  };

  handleNewImage = e => {
    this.setState({ image: e.target.files[0] });
  };

  handleSave = data => {
    const img = this.editor.getImageScaledToCanvas().toDataURL();
    const rect = this.editor.getCroppingRect();

    this.setState({
      preview: {
        img,
        rect,
        scale: this.state.scale,
        width: this.state.width,
        height: this.state.height,
        borderRadius: this.state.borderRadius
      }
    });
  };

  handleScale = e => {
    const scale = parseFloat(e.target.value);
    this.setState({ scale });
  };

  handleAllowZoomOut = ({ target: { checked: allowZoomOut } }) => {
    this.setState({ allowZoomOut });
  };

  rotateLeft = e => {
    e.preventDefault();

    this.setState({
      rotate: this.state.rotate - 90
    });
  };

  rotateRight = e => {
    e.preventDefault();
    this.setState({
      rotate: this.state.rotate + 90
    });
  };

  handleBorderRadius = e => {
    const borderRadius = parseInt(e.target.value);
    this.setState({ borderRadius });
  };

  handleXPosition = e => {
    const x = parseFloat(e.target.value);
    this.setState({ position: { ...this.state.position, x } });
  };

  handleYPosition = e => {
    const y = parseFloat(e.target.value);
    this.setState({ position: { ...this.state.position, y } });
  };

  handleWidth = e => {
    const width = parseInt(e.target.value);
    this.setState({ width });
  };

  handleHeight = e => {
    const height = parseInt(e.target.value);
    this.setState({ height });
  };

  setEditorRef = editor => {
    if (editor) this.editor = editor;
  };

  handlePositionChange = position => {
    this.setState({ position });
  };

  render() {
    const {
      imgSrc,
      width,
      height,
      scale,
      position,
      rotate,
      borderRadius
    } = this.state;

    return (
      <Grid container style={{ width: 800, margin: "auto", padding: 20 }}>
        <Grid container item xs={12} style={{ marginBottom: 35 }}>
          <Grid item xs={4}>
            <ImageFrame
              imgSrc={imgSrc}
              onDrop={this.handleDrop}
              onClick={this.handleClick}
            />
          </Grid>
          <Grid item xs={8} container justify="center">
            <ReactAvatarEditor
              ref={this.setEditorRef}
              scale={parseFloat(scale)}
              width={width}
              height={height}
              position={position}
              onPositionChange={this.handlePositionChange}
              rotate={parseFloat(rotate)}
              borderRadius={width / (100 / borderRadius)}
              image={imgSrc}
              className="editor-canvas"
            />
          </Grid>
        </Grid>
        <Grid item container xs={12} justify="center">
          <div>
            <Typography variant="h2" component="p" align="center" gutterBottom>
              Your title
            </Typography>
            <div style={{ width: 400 }}>
              <TextField label="Avatar Width" fullWidth variant="outlined" />
            </div>
          </div>
        </Grid>
      </Grid>
    );
  }
}

export default ImageApp;
