import axios from "axios";

axios.defaults.baseURL = "http://135.181.30.244:27007/api/";

export const fetchAllSummaries = (page, pageSize) => {
  return axios
    .get("summaries/", { params: { page, page_size: pageSize } })
    .then((response) => {
      return response.data;
    });
};

export const fetchFilteredSummaries = (page, photo, pageSize) => {
  return axios
    .get("summaries/", { params: { page, photo, page_size: pageSize } })
    .then((response) => {
      return response.data;
    });
};
