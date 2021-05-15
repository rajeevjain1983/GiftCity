import axios from "axios";
// axios.defaults.withCredentials = true
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
const axiosGC = axios.create({
  // baseURL: "http://my-json-server.typicode.com/rajeevjain1983/GiftCity",
  baseURL: "http://192.168.1.6:4000/",
});

export default axiosGC;
