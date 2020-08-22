import { REACT_ACTION } from "./constants";
const INITIAL_STATE = {
  ReactResponse: ""
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REACT_ACTION:
      console.log("Reducer: ", action.payload);
      return { ...state, ReactResponse: action.payload };
    default:
      return state;
  }
};
