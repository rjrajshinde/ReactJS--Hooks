import React, { Component } from "react";

class ClassCounter1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: "",
    };
  }

  // this function runs initially when the component render but only one time
  componentDidMount() {
    document.title = `Clicked ${this.state.count} times`;
  }

  // this function runs every time when there is update in the component and the component renders
  componentDidUpdate(prevProps, prevStates) {
    if (prevStates.count !== this.state.count) {
      console.log("updating");
      document.title = `Clicked ${this.state.count} times`;
    }
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.name}
          onChange={(e) => {
            this.setState({ name: e.target.value });
          }}
        />
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Clicked {this.state.count} times
        </button>
      </div>
    );
  }
}

export default ClassCounter1;
