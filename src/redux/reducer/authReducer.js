import { authConstants } from "../constant/authConstant";

const initialState = {
  signUpData: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authConstants.SIGNUP_SUCCESS:
      return {
        ...state,
        signUpData: action.response.data,
      };
    case authConstants.SIGNUP_FAILURE:
      return {
        ...state,
        signUpError: action.error,
      };
    case authConstants.LOGIN_SUCCESS:
      return {
        ...state,
        loginData: action.response.data,
      };
    case authConstants.LOGIN_FAILURE:
      return {
        ...state,
        loginFailure: action.error,
      };
    default:
      return state;
  }
};

export default authReducer;
