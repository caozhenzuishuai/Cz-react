/**
 * 创建store对象
 * @param {*} reducers reducer函数
 * @return store对象
 */
export function createStore(reducers) {
  let currentState;
  let currentListener = null;

  /**
   * 获取redux管理所有状态数据
   * @return redux管理所有状态数据
   */
  function getState() {
    return currentState;
  }

  /**
   * 触发更新
   * @param {*} action action对象
   */
  function dispatch(action) {
    currentState = reducers(currentState, action);
    currentListener && currentListener();
  }

  /**
   * 监听redux状态的变化，一旦发生变化就触发listener
   * @param {*} listener 更新组件的回调函数
   */
  function subscribe(listener) {
    currentListener = listener;
    return function () {
      currentListener = null;
    };
  }
  currentState = reducers(currentState, { type: "@@INIT-MY-REDUX-class1227" });
  return {
    getState,
    dispatch,
    subscribe,
  };
}

/**
 * 整合多个reducer函数成为一个函数
 * @param {object} reducers 是一个对象，对象中有n个reducer函数
 * @return 整合后的reducer函数
 */
export function combineReducers(reducers) {
  return function (prevState = {}, action) {
    const reducerKeys = Object.keys(reducers);
    const currentState = reducerKeys.reduce((currentState, reducerKey) => {
      const reducer = reducers[reducerKey];
      currentState[reducerKey] = reducer(prevState[reducerKey], action);
      return currentState;
    }, {});

    return currentState;
  };
}

export default {
  createStore,
  combineReducers,
};
