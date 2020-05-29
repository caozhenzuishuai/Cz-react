import React from "react";

class App extends React.Component {
  state = {
    username: "",
    password: "",
  };
  login = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    console.log(username, password);
    this.setState({
      username: "",
      password: "",
    });
  };
  /**
  handleUsernameChange = (e) => {
    const username = e.target.value.trim();
    this.setState({
      username,
    });
  };
  handlePasswordChange = (e) => {
    const password = e.target.value.trim();
    this.setState({
      password,
    });
  };
  */
  handleChange = (key) => {
    return (e) => {
      this.setState({
        [key]: e.target.value.trim(),
      });
    };
  };
  render() {
    const { username, password } = this.state;
    return (
      <form onSubmit={this.login}>
        账号：
        <input
          type="text"
          onChange={this.handleChange("username")}
          value={username}
        />
        密码：
        <input
          type="password"
          onChange={this.handleChange("password")}
          value={password}
        />
        <button type="submit">登录</button>
      </form>
    );
  }
}

export default App;
