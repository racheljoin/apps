import axios from "axios";
axios.defaults.withCredentials = true;

export const login = ({ email, verityCode }) => {
  return axios.post("/api/auth/login", {
    email,
    verityCode,
  });
};

export const getToken = () => {
  return axios
    .post(`/api/auth/getToken`, {
      withCredentials: true,
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      return err;
    });
};

export const getVerityCode = (email: string) => {
  return axios.get(`/api/email/getVerityCode?email=${email}`);
};
