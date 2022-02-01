import axios from "axios";

axios.defaults.baseURL = "http://localhost:4000/api/superheroes/";

export const fetchAllSuperheroes = (page) => {
  return axios.get("/", { params: { page } }).then((response) => {
    return response.data;
  });
};

export const fetchFilteredSummaries = (page) => {
  return axios.get("summaries/", { params: { page } }).then((response) => {
    return response.data;
  });
};
