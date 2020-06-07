import React from "./lib/react";
import ReactDOM from "./lib/react-dom";
const vDom = (
  <ul id="list" className="list">
    <li>111</li>
    <li className="child">
      <span>222</span>
    </li>
    <li onClick={() => console.log(333)}>333</li>
    <li onClick={() => console.log(444)}>444</li>
  </ul>
);
class ClassComp extends React.Component {
  render() {
    return (
      <h1 id="title" className="title">
        hello react
        <FuncComp />
      </h1>
    );
  }
}
function FuncComp() {
  return (
    <h1 id="title" className="title">
      hello react
    </h1>
  );
}
ReactDOM.render(<ClassComp />, document.getElementById("root"));
