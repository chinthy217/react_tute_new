import React, { Component } from "react";
import Counter from "../Components/Counter";

class CounterContainer extends Component {
  state = {
    count: 0,
  };

  onIncrement = () => {
    this.setState((prevstate) => ({ count: prevstate.count + 1 }));
  };

  render() {
    const { count } = this.state;
    return <Counter {...{ count, onIncrement: this.onIncrement }} />;
  }
}

export default CounterContainer;
