// import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducers from "./reducer/authReducer";
import thunkMiddleware from "redux-thunk";
import { applyMiddleware } from "redux";
import { legacy_createStore as createStore } from "redux";

// const store = createStore(
//   reducers,
//   composeWithDevTools(applyMiddleware(thunk))
// );

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));
const store = createStore(reducers, composedEnhancer);

export default store;
