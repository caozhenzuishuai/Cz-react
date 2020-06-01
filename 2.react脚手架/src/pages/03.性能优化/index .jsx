import React, { Component, PureComponent } from "react";

export default class Index extends PureComponent {
  state = {
    num: 1,
  };
  //   shouldComponentUpdate(nextProps, nextState) {
  //     // console.log(nextProps, nextState);
  //     // console.log(this.props, this.state);
  //     //简单写
  //     {
  //       /*
  //         if (this.state === nextState && this.props === nextProps) {
  //              //false 数据不更新
  //                 return false;
  //          }
  //          return true;
  //      */
  //     }

  //     //复杂一些
  //     {
  //       /*
  //       const prevStateKeys = Object.keys(this.state);
  //       const nextStateKeys = Object.keys(nextState);
  //       for (let i = 0; i < nextStateKeys.length; i++) {
  //         const nextStateKey = nextStateKeys[i];
  //         if (
  //           !this.state.hasOwnProperty(nextStateKey) ||
  //           nextState[nextStateKey] !== this.state[nextStateKey]
  //         ) {
  //           return true;
  //         }
  //       }
  //       return false;
  //     */
  //     }
  //   }
  upDate = () => {
    this.setState({
      num: this.state.num + 1,
    });
  };
  render() {
    console.log("render()");

    return <button onClick={this.upDate}>点击更新</button>;
  }
}
