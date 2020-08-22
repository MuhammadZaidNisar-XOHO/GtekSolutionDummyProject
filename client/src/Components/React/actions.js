import { REACT_ACTION } from "./constants";
export const ReactAction = (
  reactName,
  reactVersion,
  reactVolume,
  formSubmit
) => {
  const Reactdata = {
    ReactName: reactName,
    ReactVersion: reactVersion,
    ReactVolume: reactVolume,
    FormSubmit: formSubmit
  };
  console.log("Action: ", Reactdata);
  return dispatch => {
    dispatch({ type: REACT_ACTION, payload: Reactdata });
  };
};
