import React from "react";

class App extends React.Component {
  /*
 
  handleClick() {
    console.log("点我了");
    this.setState({
      isLikeMe: true,
    });
  }
  */
  //初始化 写法1
  /*
  constructor() {
    super();
    this.state = {
      isLikeMe: false,
    };
  }
  */
  //初始化 写法2 简写
  state = {
    isLikeMe: false,
  };
  handleClick = () => {
    const { isLikeMe } = this.state;
    this.setState({
      isLikeMe: !isLikeMe,
    });
  };

  render() {
    const { isLikeMe } = this.state;
    return (
      <h1 onClick={this.handleClick}>{isLikeMe ? "我喜欢你" : "你喜欢我"}</h1>
    );
  }
}
export default App;
