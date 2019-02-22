import React from 'react';
import PropTypes from 'prop-types';
import DropZone from 'react-dropzone';
import { Button, Typography, Grid } from '@material-ui/core';
import './ImageUploader.css';

const ImageUploader = ({ onDrop, onClick, maxSize, acceptedFileTypes }) => (
  <DropZone
    onDrop={onDrop}
    onClick={onClick}
    accept={acceptedFileTypes}
    maxSize={maxSize}
    multiple={false}
  >
    {({ _, getInputProps }) => (
      <div className="image-uploader-root">
        <Grid
          container
          justify="center"
          alignItems="center"
          component="label"
          htmlFor="file-upload"
          className="image-uploader-drop-area"
        >
          <div>
            <Typography align="center" gutterBottom>
              Drag & Drop here
            </Typography>
            <Button variant="contained" color="primary" component="span">
              Upload file
            </Button>
          </div>
        </Grid>
        <input
          {...getInputProps()}
          className="image-uploader-file-upload"
          id="file-upload"
          type="file"
        />
      </div>
    )}
  </DropZone>
);

ImageUploader.propTypes = {
  onDrop: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  maxSize: PropTypes.number.isRequired,
  acceptedFileTypes: PropTypes.array.isRequired,
};

export default ImageUploader;
