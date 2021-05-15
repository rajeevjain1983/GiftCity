import axios from "axios";
// axios.defaults.withCredentials = true
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
const axiosGC = axios.create({
  // baseURL: "http://my-json-server.typicode.com/rajeevjain1983/GiftCity",
  baseURL: "https://gift-city-apis.herokuapp.com",
});

export default axiosGC;
