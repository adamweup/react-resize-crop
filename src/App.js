import React, { Component } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import ImgDropAndCrop from './learn/ImgDropAndCrop'
import MyEditor from './learn/MyEditor'


function App() {
  return (
  	<div>
    <Button variant="contained" color="primary">
      Hello World
    </Button>
    <div className='App'>
      <MyEditor/> 
       </div>
   	<div className='App'>
        <ImgDropAndCrop />
      </div>
    </div>
  );
}
export default App;
