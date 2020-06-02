import React, { Component } from "react";

class Login extends Component {
  state = {
    username: "",
    password: "",
  };
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
    const { handleChange, handleSubmit } = this.props;
    return (
      <>
        <h1>登录界面</h1>
        <form onSubmit={this.handleSubmit}>
          账号：
          <input type="text" onChange={this.handleChange("username")} />
          <br />
          密码：
          <input type="password" onChange={this.handleChange("password")} />
          <br />
          <button type="submit">登录</button>
        </form>
      </>
    );
  }
}

export default Login;
