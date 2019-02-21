import React from 'react'
import AvatarEditor from 'react-avatar-editor'
import Dropzone from 'react-dropzone'

class MyEditor extends React.Component {
  render() {
    const color = [255, 255, 255, 0.6] 
    return (
      <div>
      <AvatarEditor
        image="https://image.shutterstock.com/image-photo/man-little-boy-shaving-foam-450w-788255794.jpg"
        width={250}
        height={250}
        border={50}
        color={color}
        scale={1.2}
        rotate={0}
      />
      <Dropzone
      onDrop={this.handleDrop}
      disableClick
      style={{ width: '250px', height: '250px' }}
    >
      <ReactAvatarEditor width={250} height={250} image={this.state.image} />
    </Dropzone>
    </div>
    )
  }
}

export default MyEditor