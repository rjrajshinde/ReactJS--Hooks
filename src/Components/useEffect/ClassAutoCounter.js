import React, { Component } from "react";

class ClassAutoCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  changeCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  componentDidMount() {
    this.interval = setInterval(this.changeCount, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <>
        <h1>{this.state.count}</h1>
      </>
    );
  }
}

export default ClassAutoCounter;
