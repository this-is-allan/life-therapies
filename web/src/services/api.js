import axios from "axios";

// const token = "e0e6e2967dde85c9b0c604989ae1af47";

axios.defaults.baseURL = "http://127.0.0.1:3333/api/v1";
// axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

export default {
  therapies: {
    getAll: () => axios.get(`/therapies`).then(res => res.data),
    getByCategory: category =>
      axios
        .get(`/therapies`, {
          params: {
            category: category
          }
        })
        // .then(res => console.log("category!", category))
        .then(res => res.data)
  }
};
