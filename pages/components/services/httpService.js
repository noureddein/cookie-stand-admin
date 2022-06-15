import axios from "axios";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL;

axios.interceptors.response.use(null, (error) => {
  /*
        Unexpected: (Network down, server down, db down, Bug,the URL is wrong)
        - Log the error
        - Display a generic and friendly error message
   */
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    console.log(error);
  }
  return Promise.reject(error);
});

function setJwt(jwt) {
  axios.defaults.headers.common["authorization"] = jwt;
}

const exportedObject = {
  get: axios.get,
  put: axios.put,
  patch: axios.patch,
  delete: axios.delete,
  post: axios.post,
  setJwt,
};

export default exportedObject;
