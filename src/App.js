import React, { Component } from "react";
import "./App.css";
// import Button from "@material-ui/core/Button"; --Dont need it for now
import ImageApp from "./learn/ImageApp";
import ImgDropAndCrop from "./learn/ImgDropAndCrop";
import MyEditor from "./learn/MyEditor";

function App() {
  return (
    <div>
      <ImageApp />
      {/*<div className="App">
        <MyEditor />
      </div>
      <div className="App">
        <ImgDropAndCrop />
  </div>*/}
    </div>
  );
}
export default App;
