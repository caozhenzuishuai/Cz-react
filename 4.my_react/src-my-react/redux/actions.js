import { INCREMENT, DECREMENT } from "./constants";
export const increment = (number) => ({
  type: INCREMENT,
  data: number,
});
export const decrement = (number) => ({
  type: DECREMENT,
  data: number,
});
