import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import routes from "../../config/routes";

export default class Header extends Component {
  render() {
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
        <ul></ul>
      </div>
    );
  }
}
