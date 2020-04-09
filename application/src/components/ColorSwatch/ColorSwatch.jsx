import React from "react";
import { SketchPicker } from "react-color";
import "./../ColorSwatch/ColorSwatch.scss";

class ColorSwatch extends React.Component {
  state = {
    displayColorPicker: false,
    color: {
      r: "241",
      g: "112",
      b: "19",
      a: "1",
    },
  };

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false });
  };

  handleChange = (color) => {
    this.setState({ color: color.rgb });
  };

  render() {
    return (
      <div>
        <div onClick={this.handleClick}>
          <div className="color-swatch" />
        </div>
        {this.state.displayColorPicker ? (
          <div className="popover">
            <div className="cover" onClick={this.handleClose} />
            <SketchPicker
              color={this.state.color}
              onChange={this.handleChange}
            />
          </div>
        ) : null}
      </div>
    );
  }
}

export default ColorSwatch;
