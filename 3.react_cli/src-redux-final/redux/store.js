import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import reducers from "./reducers";

const middleware = applyMiddleware(thunk);

const store = createStore(
  reducers,

  process.env.NODE_ENV === "development"
    ? composeWithDevTools(middleware)
    : middleware
);

export default store;
