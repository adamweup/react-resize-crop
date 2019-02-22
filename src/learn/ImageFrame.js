import React from "react";
import DropZone from "react-dropzone";
import { Button, Typography, Grid } from "@material-ui/core";

const ImageFrame = ({
  onDrop,
  onClick,
  imgSrc,
  maxSize,
  acceptedFileTypes
}) => (
  <DropZone
    onDrop={onDrop}
    onClick={onClick}
    accept={acceptedFileTypes}
    maxSize={maxSize}
    multiple={false}
  >
    {({ _, getInputProps }) => (
      <div
        style={{
          width: 250,
          height: 250,
          position: "relative",
          border: "1px dashed black"
        }}
      >
        <Grid
          component="label"
          htmlFor="file-upload"
          justify="center"
          alignItems="center"
          container
          style={{
            position: "absolute",
            width: "100%",
            height: "100%"
          }}
        >
          <div>
            <Typography align="center">
              {imgSrc ? "Change picture" : "Drag & Drop here"}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              component="span"
              style={{
                marginTop: "15px"
              }}
            >
              Upload file
            </Button>
          </div>
        </Grid>
        <input
          {...getInputProps()}
          id="file-upload"
          type="file"
          style={{
            width: 0.1,
            height: 0.1,
            opacity: 0,
            overflow: "hidden",
            position: "absolute",
            zIndex: -1
          }}
        />
      </div>
    )}
  </DropZone>
);

export default ImageFrame;
