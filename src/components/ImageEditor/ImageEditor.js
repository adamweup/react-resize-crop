import React from 'react';
import PropTypes from 'prop-types';
import ReactAvatarEditor from 'react-avatar-editor';

const ImageEditor = ({
  imgSrc,
  setEditorRef,
  border,
  rotate,
  scale,
  position,
  onPositionChange,
  width,
  height,
}) => (
  <ReactAvatarEditor
    image={imgSrc}
    ref={setEditorRef}
    width={width}
    height={height}
    border={border}
    rotate={rotate}
    scale={scale}
    position={position}
    onPositionChange={onPositionChange}
  />
);

ImageEditor.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  setEditorRef: PropTypes.func.isRequired,
  border: PropTypes.number.isRequired,
  rotate: PropTypes.number.isRequired,
  scale: PropTypes.number.isRequired,
  position: PropTypes.object.isRequired,
  onPositionChange: PropTypes.func.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

export default ImageEditor;
