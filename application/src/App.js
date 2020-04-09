import React, { Component } from "react";
import Canvas from "./components/Canvas/Canvas";
import ColorSwatch from "./components/ColorSwatch/ColorSwatch";
import colors from "./../src/components/colors";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ColorSwatch />
      </div>
    );
  }
}

export default App;
