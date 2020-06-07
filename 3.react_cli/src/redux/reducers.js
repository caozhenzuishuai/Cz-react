import { combineReducers } from "redux";
import { ADD_COMMENT, DEL_COMMENT } from "./contants";
const initComments = [
  { id: 1, name: "jack", content: "you jump i jump" },
  { id: 2, name: "rose", content: "i donnot jump" },
];

function comments(prevState = initComments, action) {
  switch (action.type) {
    case ADD_COMMENT:
      return [action.data, ...prevState];
    case DEL_COMMENT:
      return prevState.filter((comment) => comment.id !== action.data);
    default:
      return prevState;
  }
}

export default combineReducers({
  comments,
});
