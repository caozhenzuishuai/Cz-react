import React, { Component } from "react";

import personContext from "./context";
export default class Son extends Component {
  static contextType = personContext;

  handleChick = () => {
    console.log(this.context);
  };
  render() {
    return (
      <>
        <h3 onClick={this.handleChick}>Son...</h3>
        <personContext.Consumer>
          {(p) => {
            const { name, age } = p;
            return (
              <ul>
                <li>姓名 ： {name}</li>
                <li>年龄 ： {age}</li>
              </ul>
            );
          }}
        </personContext.Consumer>
      </>
    );
  }
}
