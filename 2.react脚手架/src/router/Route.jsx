import React, { Component } from "react";
import { matchPath } from "react-router";
import context from "./context";
export default class Route extends Component {
  render() {
    return (
      <context.Consumer>
        {(context) => {
          const { pathname } = context.location;
          const match = matchPath(pathname, this.props);
          if (!match) return null;
          return React.createElement(this.props.component, context);
        }}
      </context.Consumer>
    );
  }
}
