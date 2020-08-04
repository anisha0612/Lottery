import React, { Component } from "react";
import Ball from "../Ball/Ball.js";

class Lottery extends Component {
  static defaultProps = {
    title: "Lotto",
    numBalls: 6,
    maxNum: 40,
  };
  constructor(props) {
    super(props);
    this.state = {
      numbers: Array.from({ length: this.props.numBalls }),
    };
  }
  generateNum = () => {
    this.setState((currState) => ({
      numbers: currState.numbers.map(
        (n) => Math.floor(Math.random() * this.props.maxNum) + 1
      ),
    }));
  };
  handleClick = () => {
    this.generateNum();
  };
  render() {
    return (
      <section className="Lottery">
        <h1>{this.props.title}</h1>
        <div className="Lottery-balls">
          {this.state.numbers.map((n) => (
            <Ball num={n} />
          ))}
        </div>
        <button className="Lottery-button" onClick={this.handleClick}>
          Draw
        </button>
      </section>
    );
  }
}

export default Lottery;
