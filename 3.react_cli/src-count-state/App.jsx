import React, { Component } from "react";

export default class App extends Component {
  state = {
    count: 0,
    number: 1,
  };
  handleChange = (e) => {
    this.setState({
      number: +e.target.value,
    });
  };
  increment = () => {
    const { count, number } = this.state;
    this.setState({
      count: count + number,
    });
  };
  decrement = () => {
    const { count, number } = this.state;
    this.setState({
      count: count - number,
    });
  };
  incrementIfOdd = () => {
    const { count, number } = this.state;
    if (count & 1) {
      this.setState({
        count: count + number,
      });
    }
  };
  incrementAsync = () => {
    setTimeout(() => {
      const { count, number } = this.state;
      this.setState({
        count: count + number,
      });
    }, 1000);
  };
  render() {
    const { count } = this.state;
    return (
      <>
        <p>click {count} times</p>
        <select onChange={this.handleChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.incrementIfOdd}>increment if odd</button>
        <button onClick={this.incrementAsync}>increment async</button>
      </>
    );
  }
}
