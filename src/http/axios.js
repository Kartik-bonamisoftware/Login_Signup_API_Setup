import axios from "axios";
// import { base_URL } from "../util/config";

//axios interceptors
axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.baseURL = "http://localhost:9000";
axios.interceptors.request.use((config) => {
  const accessToken = JSON.parse(localStorage.getItem("accessToken"));
  if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;
  return config;
}, null);

// Any status code that lie within the range of 2xx cause this function to trigger
axios.interceptors.response.use(
  (response) => {
    // Do something with response data

    //modifiy condition  and route based on response object structure
    if (response.data && response.data.status === 401) {
      window.localStorage.clear();
      window.location = "/login";
    }
    return response;
  },
  (error) => Promise.reject(error)
);

export default {
  get: axios.get,
  post: axios.post,
  delete: axios.delete,
  put: axios.put,
};
