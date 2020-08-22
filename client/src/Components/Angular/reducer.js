import { ANGULAR_ACTION } from "./constants";
const INITIAL_STATE = {
  AngularResponse: ""
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ANGULAR_ACTION:
        console.log("Reducer: ",action.payload )
      return { ...state, AngularResponse: action.payload };
    default:
      return state;
  }
};
