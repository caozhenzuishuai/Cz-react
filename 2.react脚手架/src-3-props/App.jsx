import React from "react";

import Child from "./pages/Child";

class App extends React.Component {
  state = {
    person: {
      name: "张晓飞",
      age: 40,
      sex: "男",
    },
  };
  updatePerson = (person) => {
    this.setState({
      person,
    });
  };
  render() {
    const { person } = this.state;
    return (
      <div>
        <h1>App...</h1>
        <Child {...person} updatePerson={this.updatePerson}></Child>
      </div>
    );
  }
}

export default App;
