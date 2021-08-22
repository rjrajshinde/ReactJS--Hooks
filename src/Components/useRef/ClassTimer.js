import React, { Component } from "react";

class ClassTimer extends Component {
  interval;

  constructor(props) {
    super(props);

    this.state = {
      timer: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        timer: this.state.timer + 1,
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <>
        <h3>Timer - {this.state.timer}</h3>
        <br></br>
        <button onClick={() => clearInterval(this.interval)}>Stop</button>
      </>
    );
  }
}

export default ClassTimer;
