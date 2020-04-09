import React from "react";
import "./../Canvas/Canvas.scss";

function Canvas() {
  return (
    <div>
      <div className="canvas-container">
        <div id="part-one" className="color" />
        <div id="part-two" className="color" />
        <div id="part-three" className="color" />
        <div id="part-four" className="color" />
      </div>
    </div>
  );
}

export default Canvas;
