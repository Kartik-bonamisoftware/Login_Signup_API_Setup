import axios from "../../http/axios";
import { authService } from "../../services/authService";
import { authConstants } from "../constant/authConstant";

export const authAction = {
  signUp,
  login,
};

function signUp(payload) {
  console.log("payload", payload);
  return (dispatch) => {
    dispatch(request(authConstants.SIGNUP_REQUEST));
    authService
      .signUp(payload)
      .then((response) => {
        dispatch(success(authConstants.SIGNUP_SUCCESS, response));
      })
      .catch((error) => {
        dispatch(failure(authConstants.SIGNUP_FAILURE, error));
      });
  };
}

function login(payload) {
  return (dispatch) => {
    dispatch(request(authConstants.LOGIN_REQUEST));
    authService
      .login(payload)
      .then((response) => {
        if (response.status === 200)
          localStorage.setItem("accessToken", response.data.user);
        dispatch(success(authConstants.LOGIN_SUCCESS, response));
      })
      .catch((error) => {
        dispatch(failure(authConstants.LOGIN_FAILURE, error));
      });
  };
}

function request(action, payload) {
  return { type: action, payload };
}

function success(action, response) {
  return { type: action, response };
}

function failure(action, error) {
  return { type: action, error };
}
