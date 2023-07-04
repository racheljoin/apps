import axios from "axios";
axios.defaults.withCredentials = true;
axios.interceptors.response.use(
  (response) => response,
  (error) => ({ error })
);

export const login = ({ email, verityCode }) => {
  return axios.post("/api/auth/login", {
    email,
    verityCode,
  });
};

export const getToken = () => {
  return axios.post(`/api/auth/getToken`, {
    withCredentials: true,
  });
};

export const getVerityCode = (email: string) => {
  return axios.get(`/api/email/getVerityCode?email=${email}`);
};
