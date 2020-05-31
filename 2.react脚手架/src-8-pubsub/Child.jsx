import React, { Component } from "react";
import PubSub from "pubsub-js";

export default class Child extends Component {
  componentDidMount() {
    PubSub.subscribe("RECEIVE_DATA", (msg, data) => {
      console.log("Child接收到了数据：", msg, data);
    });
  }
  componentWillUnmount() {
    PubSub.unsubscribe("RECEIVE_DATA");
  }
  render() {
    return <div>Child。。。</div>;
  }
}
