import api from "./api";

export const loginApi = (data) =>
  api()
    .post("/signin", data)
    .then((res) => handleResponse(res))
    .catch((err) => handleErrorResponse(err));

const handleResponse = (res) => {
  const { data } = res;
  if (res.status !== 200 || res.data.error) {
    const error = data.message ? data.message : data.error;
    return Promise.reject(error);
  }
  return {
    data: res.data.data,
    message: data.message,
    status: res.status,
  };
};

const handleErrorResponse = (err) => {
  const { request, response } = err;
  if (response) {
    const { message } = response.data;
    const { data } = response.data;
    const status = response.status;
    return {
      data,
      message,
      status,
    };
  } else if (request) {
    //request sent but no response received
    return {
      message: "server time out",
      status: 503,
    };
  } else {
    // Something happened in setting up the request that triggered an Error
    return {
      message: "opps! something went wrong while setting up request",
      status: 500,
    };
  }
};
