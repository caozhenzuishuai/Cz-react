import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import "./index.css";
export default class Modal extends Component {
  static propTypes = {
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
      .isRequired,
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
      .isRequired,
    visible: PropTypes.bool.isRequired,
    onCancel: PropTypes.func,
    onOk: PropTypes.func,
  };
  static defaultValue = {
    onCancel: () => {},
    onOk: () => {},
  };
  constructor() {
    super();
    this.div = document.createElement("div");
  }
  componentDidMount() {
    document.body.appendChild(this.div);
  }

  componentWillUnmount() {
    this.div.remove();
  }

  render() {
    const { title, content, visible, onCancel, onOk } = this.props; // 父组件给子组件传递数据
    const Modal = (
      <div className="modal" style={{ display: visible ? "block" : "none" }}>
        <div className="modal-wrap">
          <div className="modal-wrap-header">
            <h3>{title}</h3>
            <button onClick={onCancel}>x</button>
          </div>
          <div className="modal-wrap-content">{content}</div>
          <div className="modal-wrap-footer">
            <button onClick={onCancel}>取消</button>
            <button onClick={onOk} className="modal-wrap-footer-btn2">
              确认
            </button>
          </div>
        </div>
        <div className="modal-mask"></div>
      </div>
    );
    return ReactDOM.createPortal(Modal, this.div);
  }
}
