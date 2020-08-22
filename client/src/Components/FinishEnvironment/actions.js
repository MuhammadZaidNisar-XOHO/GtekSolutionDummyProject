import { FINISH_ACTION } from "./constants";
import axios from 'axios';
export const FinishEnvironmentAction = (
  AngularReducer,
  ReactReducer,
  VueReducer
) => {
  const Environmentdata = {
    AngularData: AngularReducer,
    ReactData: ReactReducer,
    VueData: VueReducer
  };
  console.log("Action(Environmentdata): ", Environmentdata);
  //send request to node to save data in mongodb
  axios.post("http://localhost:9000/summary", // api
  Environmentdata, // data
  {headers:{ // configuring header
    'content-type': 'application/json'}
  }).then((data)=>{console.log(data);}).
  catch((err)=>{console.log(err);})
  return dispatch => {
    dispatch({ type: FINISH_ACTION, payload: Environmentdata });
  };
};
