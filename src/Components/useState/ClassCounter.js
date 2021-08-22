import React, { Component } from "react";

// increase Counter functionality using simple class component

class ClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.incrementCount}>Add</button>
        <br />
        Count:- {this.state.count}
      </div>
    );
  }
}

export default ClassCounter;
