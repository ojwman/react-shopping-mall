import { createStore } from "redux";

export default createStore(function(state, action) {
  if (state === undefined) {
    console.log("store init");
    console.log("jwt-token", window.localStorage.getItem("jwt-token"));
    if (
      window.localStorage.getItem("jwt-token") != null &&
      window.localStorage.getItem("jwt-token").length > 0
    ) {
      return { loginYN: "Y" };
    } else {
      return { loginYN: "N" };
    }
  }
  if (action.type === "LOGIN") {
    return { ...state, loginYN: action.jwt_token };
  }
  return state;
}, window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__());
