import { INCREMENT, DECREMENT } from "./constants";
export const increment = (number) => ({
  type: INCREMENT,
  data: number,
});

export const decrement = (number) => ({
  type: DECREMENT,
  data: number,
});
export const incrementAsync = (number) => {
  return (dispatch) => {
    setTimeout(() => {
      const action = increment(number);
      dispatch(action);
    }, 1000);
  };
};
