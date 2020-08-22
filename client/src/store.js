import { combineReducers } from "redux";
import AngularReducer from "../src/Components/Angular/reducer";
import ReactReducer from "../src/Components/React/reducer";
import VueReducer from "../src/Components/Vue/reducer";
import FinishEnvironmentReducer from "../src/Components/FinishEnvironment/reducer";
//Combine Reducers
const reducers = combineReducers({
  AngularReducer,
  ReactReducer,
  VueReducer,
  FinishEnvironmentReducer
});
export default reducers;
