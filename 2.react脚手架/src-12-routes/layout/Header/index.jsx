import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";

import routes from "../../config/routes";

@withRouter
export default class Header extends Component {
  renderChildren = () => {
    const { pathname } = this.props.location;

    for (let i = 0; i < routes.length; i++) {
      const route = routes[i];
      if (pathname.startsWith(route.path)) {
        return route.children || [];
      }
    }
    return [];
  };

  render() {
    const routeChildren = this.renderChildren();
    return (
      <div>
        <ul>
          {routes.map((route) => {
            return (
              <li key={route.path}>
                <NavLink to={route.path}>{route.name}</NavLink>
              </li>
            );
          })}
        </ul>
        <ul>
          {routeChildren.map((route) => {
            return (
              <li key={route.path}>
                <NavLink to={route.path}>{route.name}</NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
