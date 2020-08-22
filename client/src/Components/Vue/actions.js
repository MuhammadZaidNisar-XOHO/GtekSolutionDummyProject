import { VUE_ACTION } from "./constants";
export const VueAction = (vueName, vueVersion, vueVolume, formSubmit) => {
  const Vuedata = {
    VueName: vueName,
    VueVersion: vueVersion,
    VueVolume: vueVolume,
    FormSubmit: formSubmit
  };
  console.log("Action: ", Vuedata);
  return dispatch => {
    dispatch({ type: VUE_ACTION, payload: Vuedata });
  };
};
