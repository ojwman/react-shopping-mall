import { createStore } from "redux";

export default createStore(function(state, action) {
  if (state === undefined) {
    return { ...state };
  }

  if (action.type === "LOGIN") {
    return { ...state, loginYN: action.jwt_token };
  }
  return state;
}, window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__());
