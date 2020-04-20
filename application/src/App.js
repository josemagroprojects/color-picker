import React, { Component } from "react";
import Canvas from "./components/Canvas/Canvas";
import ColorSwatch from "./components/ColorSwatch/ColorSwatch";
import colors from "./../src/components/colors";
import "./index.scss";

let colorIndex = null;

class App extends Component {
  state = {
    colors: colors,
  };

  checkColor = (colorId) => {
    colorIndex = this.state.colors.findIndex((clr) => {
      return clr.id === colorId;
    });

    const color = {
      ...this.state.colors[colorIndex],
    };

    return color;
  };

  assignProp = (color) => {
    const colors = [...this.state.colors];
    colors[colorIndex] = color;

    return colors;
  };

  handleClick = (colorId) => {
    const color = this.checkColor(colorId);
    color.displayColorPicker
      ? (color.displayColorPicker = false)
      : (color.displayColorPicker = true);

    const colors = this.assignProp(color);

    this.setState({ colors: colors });
  };

  handleChange = (event, colorId) => {
    const color = this.checkColor(colorId);
    color.color = event.hex;

    const colors = this.assignProp(color);

    this.setState({ colors: colors });
  };

  render() {
    return (
      <div className="App">
        <h1 className="header-padding">Choose new colors for this shapes</h1>
        <Canvas code={this.state.colors} />
        <div className="swatch-wrapper">
          <div className="message">
            <span>Define your palette here</span>
          </div>
          <div>
            {this.state.colors.map((swatch) => {
              return (
                <ColorSwatch
                  key={swatch.id}
                  code={swatch.color}
                  currentState={swatch.displayColorPicker}
                  picker={() => this.handleClick(swatch.id)}
                  change={(event) => this.handleChange(event, swatch.id)}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
