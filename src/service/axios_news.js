import axios from "axios";

const axiosNews = axios.create({
  baseURL: "https://hn.algolia.com/api/v1",
});

export default axiosNews;
