import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import routes from "../../config/routes";
export default class Content extends Component {
  renderRoutes = () => {
    const renderRoutes = [];

    routes.forEach((route) => {
      renderRoutes.push(
        <Route
          path={route.path}
          key={route.path}
          component={route.component}
          exact
        />
      );
      if (route.children) {
        route.children.forEach((childRoute) => {
          renderRoutes.push(
            <Route
              path={childRoute.path}
              key={childRoute.path}
              component={childRoute.component}
            />
          );
        });
      }
    });
    return renderRoutes;
  };
  render() {
    return <Switch>{this.renderRoutes()}</Switch>;
  }
}
