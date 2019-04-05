import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

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
