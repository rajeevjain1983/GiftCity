import axiosGC from "../../axiosGC";

export const getNavigationData = () => {
  const url = '/navigation/main-navigation';
  return axiosGC.get(url).then(res=>{
    console.log("getNavigationData 2",res.data);
      return res.data;
  }).catch(error=>{
      console.log("Error::getNavigationData",error);
      return null;
  })
};
