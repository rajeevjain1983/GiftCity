import axiosNews from "./axiosGC";
import { formatNewsData } from "../components/common/Util";

export const getNewsDataFromApi = async (apiPageNumber) => {
  const queryString = apiPageNumber ? `page=${apiPageNumber}` : "page=0";
  const url = `/search?tags=story&${queryString}`;
  const res = await axiosNews.get(url);
  return formatNewsData(res.data);
};
