/**
 * 创建虚拟DOM对象
 * @param {元素类型} type
 * @param {元素属性} props
 * @param  {子元素} children
 * @return 虚拟DOM对象
 */
export function createElement(type, props, ...children) {
  props.children = children;
  let $$typeof;

  if (typeof type === "string") {
    $$typeof = 1;
  }

  if (typeof type === "function") {
    $$typeof = type.isReactComponent ? 3 : 2;
  }
  return {
    $$typeof,
    type,
    props,
  };
}
export class Component {
  static isReactComponent = {};
  constructor(props) {
    this.props = props;
  }
}
export default {
  createElement,
  Component,
};
