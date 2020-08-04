import React, { Component } from "react";
import "./Ball.css";

class Ball extends Component {
  render() {
    return (
      <div className="Ball">
        <div class="Ball-num">
          <span>{this.props.num}</span>
        </div>
      </div>
    );
  }
}

export default Ball;
