import { combineReducers } from "redux";
import authReducer from "./authReducers";

const reducers = (state, action) => {
  switch (action.type) {
    default: {
      const combinedReducer = combineReducers({ authReducer });
      return combinedReducer(state, action);
    }
  }
};
export default reducers;
