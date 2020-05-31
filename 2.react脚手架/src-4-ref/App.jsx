import React from "react";

class App extends React.Component {
  inputRef = React.createRef();
  handleChick = () => {
    const value = this.inputRef.current.value.trim();
    alert(value);
  };
  handleBlur = (e) => {
    alert(e.target.value.trim());
  };
  render() {
    return (
      <div>
        <input type="text" placeholder="输入内容" ref={this.inputRef} />
        <button onClick={this.handleChick}>点击显示</button>
        <input
          type="text"
          placeholder="失去焦点触发"
          onBlur={this.handleBlur}
        />
      </div>
    );
  }
}

export default App;
