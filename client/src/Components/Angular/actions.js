import { ANGULAR_ACTION } from "./constants";
export const NodeAction = (nodeName, nodeVersion, nodeVolume,formSubmit) => {
  const Angulardata = {
    NodeName: nodeName,
    NodeVersion: nodeVersion,
    NodeVolume: nodeVolume,
    FormSubmit: formSubmit
  };
  console.log("Action: ", Angulardata);
  return dispatch => {
    dispatch({ type: ANGULAR_ACTION, payload: Angulardata });
  };
};
