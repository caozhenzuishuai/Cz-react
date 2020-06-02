import React, { Component } from "react";
// import FragmentDemo from "./pages/01.Fragment";

// import Father from "./pages/02.context/Father";
// import personContext from "./pages/02.context/context";

// import Index from "./pages/03.性能优化/index ";

// import ForwardRef from "./pages/04.forwardRef";

// import Modal from "./pages/05.modal";

import Login from "./pages/06.HOC/Login";
import Register from "./pages/06.HOC/Register";

export default class App extends Component {
  state = {
    person: {
      name: "xfz",
      age: "40",
    },
    visible: false,
  };
  // xxRef = React.createRef();

  // componentDidMount() {
  //   console.log(this.xxRef);
  // }

  showModal = () => {
    // 让Modal显示 --> visible: true
    this.setState({
      visible: true,
    });
  };

  hiddenModal = () => {
    this.setState({
      visible: false,
    });
  };
  render() {
    return (
      <>
        {/* <FragmentDemo /> */}

        {/* <personContext.Provider value={this.state.person}>
          <Father />
        </personContext.Provider> */}

        {/* <Index person={this.state.person} /> */}

        {/* <ForwardRef {...this.state.person} ref={this.xxRef}>
          <p>hello~~~</p>
        </ForwardRef> */}

        {/* <button onClick={this.showModal}>点击显示Modal</button>

        <Modal
          title={<span>app title</span>}
          content={<div>app content...</div>}
          visible={this.state.visible}
          onCancel={this.hiddenModal}
        /> */}

        <Login />
        <Register />
      </>
    );
  }
}
