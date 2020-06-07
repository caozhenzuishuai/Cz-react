import React, { Component } from "react";

const context = React.createContext();
export class Provider extends Component {
  render() {
    return (
      <context.Provider value={this.props.store}>
        {this.props.children}
      </context.Provider>
    );
  }
}
export function connect(mapStateToProps, mapDispatchToProps) {
  return function (UIComponent) {
    return class extends Component {
      static displayName = `Connect(${
        UIComponent.displayName || UIComponent.name || "Component"
      })`;
      static contextType = context;
      componentDidMount() {
        this.unsubscribe = this.context.subscribe(() => {
          this.setState({});
        });
      }
      componentWillUnmount() {
        this.unsubscribe();
      }
      render() {
        return (
          <context.Consumer>
            {(store) => {
              const currentState = store.getState();
              const state = mapStateToProps(currentState);
              const dispatch = Object.keys(mapDispatchToProps).reduce(
                (dispatch, actionKey) => {
                  const actionFn = mapDispatchToProps[actionKey];
                  dispatch[actionKey] = function (...args) {
                    const action = actionFn(...args);
                    store.dispatch(action);
                  };

                  return dispatch;
                },
                {}
              );
              return <UIComponent {...state} {...dispatch} />;
            }}
          </context.Consumer>
        );
      }
    };
  };
}
