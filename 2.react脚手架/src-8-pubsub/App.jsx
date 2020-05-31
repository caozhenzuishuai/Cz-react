import React, { Component } from "react";
import PubSub from "pubsub-js";

import Child from "./Child";

export default class App extends Component {
  handleChick = () => {
    console.log("App发送信息");
    PubSub.publish("RECEIVE_DATA", "我爱你啊");
  };
  render() {
    return (
      <div>
        App...
        <button onClick={this.handleChick}>点击发送</button>
        <Child />
      </div>
    );
  }
}
