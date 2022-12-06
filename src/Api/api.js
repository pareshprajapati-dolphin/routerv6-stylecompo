import axios from "axios";

const BACKEND_API = process.env.REACT_APP_BACKEND_URI;

export default function api(token) {
  if (typeof token === "string") {
    return axios.create({
      baseURL: `${BACKEND_API}`,
      headers: {
        Authorization: `Bearer ` + token,
        "Content-Type": "application/json",
        Accept: "*/*",
      },
      timeout: 5000,
    });
  } else {
    return axios.create({
      baseURL: `${BACKEND_API}`,
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
      },
      timeout: 5000,
    });
  }
}
