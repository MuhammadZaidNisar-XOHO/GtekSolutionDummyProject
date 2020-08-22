import { FINISH_ACTION } from "./constants";
const INITIAL_STATE = {
  EnvironmentResponse: ""
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FINISH_ACTION:
      console.log("Reducer(Environment): ", action.payload);
      return { ...state, EnvironmentResponse: action.payload };
    default:
      return state;
  }
};
