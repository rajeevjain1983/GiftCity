import axios from "axios";

const axiosGC = axios.create({
  baseURL: "http://my-json-server.typicode.com/rajeevjain1983/GiftCity",
});

export default axiosGC;
