import React, { Component } from "react";

export default function withForm(WrappedComponent) {
  return class extends Component {
    static displayName = `Form(${
      WrappedComponent.displayName || WrappedComponent.name || "Component"
    })`;
    // 高阶函数
    handleChange = (key) => {
      return (e) => {
        this.setState({
          [key]: e.target.value.trim(),
        });
      };
    };

    handleSubmit = (e) => {
      e.preventDefault();
      console.log(this.state);
    };
    render() {
      return (
        <WrappedComponent
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      );
    }
  };
}
