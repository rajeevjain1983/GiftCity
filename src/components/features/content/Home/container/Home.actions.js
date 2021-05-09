// 9fbef606107a605d69c0edbcd8029e5d
import HOME_CONSTANTS from '../Home.constants';

export const getNavigation = () => {

  console.log("getNavigation");
  return {
    type: HOME_CONSTANTS.GET_NAVIGATION,
  };
};

export const setNavigation = (payload) => {
  return {
    type: HOME_CONSTANTS.SET_NAVIGATION,
    payload
  };
};