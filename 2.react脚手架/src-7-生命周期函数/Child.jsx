import React, { Component } from "react";
import ReactDOM from "react-dom";
export default class Child extends Component {
  state = {
    opacity: 1,
  };
  componentDidMount() {
    this.timeId = setInterval(() => {
      let { opacity } = this.state;
      opacity -= 0.01;
      if (opacity <= 0) opacity = 1;
      this.setState({
        opacity,
      });
    }, 1000 / 60);
  }
  componentWillUnmount() {
    clearInterval(this.timeId);
  }
  goDie = () => {
    ReactDOM.unmountComponentAtNode(document.getElementById("root"));
  };
  render() {
    const { opacity } = this.state;

    return (
      <div>
        <h1 style={{ opacity }}>React学不会怎么办？</h1>
        <button onClick={this.goDie}>goDie</button>
      </div>
    );
  }
}
