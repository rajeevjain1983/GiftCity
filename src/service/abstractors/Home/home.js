import axiosGC from "../../axiosGC";

export const getNavigationData = () => {
  const url = '/navigation/main-navigation';
  return axiosGC.get(url).then(res=>{
      return res.data;
  }).catch(error=>{
      console.log("Error::getNavigationData",error);
      return null;
  })
};
