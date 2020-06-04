import React, { Component } from "react";
import context from "./context";
export default class Link extends Component {
  static contextType = context;
  handleClick = (e) => {
    e.preventDefault();
    this.context.history.push(this.props.to);
  };
  render() {
    return <a onClick={this.handleClick}>{this.props.children}</a>;
  }
}
