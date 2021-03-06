import React, { Component } from "react";
import PropTypes from "prop-types";

import "./index.css";

export default class Header extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired,
  };

  state = {
    name: "",
  };
 handleChange = (e) => {
   this.setState({
     name: e.target.value.trim(),
   });
 };

  handleKeyUp = (e) => {
    const { name } = this.state;
   if (e.keyCode === 13 && name) {
      this.props.addTodo(name);
      this.setState({
        name: "",
      });
    }
  };
  render() {
	  const {name} = this.state
    return (
      <div className="todo-header">
        <input
          type="text"
          placeholder="请输入你的任务名称，按回车键确认"
          onChange={this.handleChange}
          onKeyUp={this.handleKeyUp}
          value={name}
        />
      </div>
    );
  }
}
