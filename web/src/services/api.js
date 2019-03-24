import axios from "axios";

// const token = "e0e6e2967dde85c9b0c604989ae1af47";

axios.defaults.baseURL = "http://127.0.0.1:3333/api/v1";
// axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

export default {
  therapies: {
    getAll: (page, category) =>
      axios
        .get(`/therapies`, {
          params: {
            page,
            category
          }
        })
        .then(res => res.data)
    // getByCategory: (page, category) =>
    //   axios
    //     .get(`/therapies`, {
    //       params: {
    //         page: page,
    //         category: category
    //       }
    //     })
    //     .then(res => res.data)
  }
};
