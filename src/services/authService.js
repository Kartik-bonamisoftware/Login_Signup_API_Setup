import axios from "../http/axios";

function signUp(payload) {
  return axios
    .post("http://localhost:9010/api/register", payload)
    .then((res) => res);
}

function login(payload) {
  return axios
    .post("http://localhost:9010/api/login", payload)
    .then((res) => res);
}

export const authService = {
  signUp,
  login,
};
