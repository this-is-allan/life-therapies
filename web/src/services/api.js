import axios from "axios";

// const token = "e0e6e2967dde85c9b0c604989ae1af47";

axios.defaults.baseURL = "http://192.168.0.101:3333/api/v1";
// axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

export default {
  therapies: {
    fetchTherapy: id => axios.get(`/therapies/${id}`).then(res => res.data),
    getAll: (page, category) =>
      axios
        .get(`/therapies`, {
          params: {
            page,
            category
          }
        })
        .then(res => res.data)
  }
};
