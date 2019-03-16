import axios from "axios";

const token = "e0e6e2967dde85c9b0c604989ae1af47";

axios.defaults.baseURL = "https://api.vimeo.com";
axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

export default {
  therapies: {
    getAll: () => axios.get(`/`).then(res => res.data)
  }
};
