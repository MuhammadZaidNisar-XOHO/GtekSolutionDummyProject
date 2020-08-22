import { VUE_ACTION } from "./constants";
const INITIAL_STATE = {
  VueResponse: ""
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case VUE_ACTION:
      console.log("Reducer: ", action.payload);
      return { ...state, VueResponse: action.payload };
    default:
      return state;
  }
};
