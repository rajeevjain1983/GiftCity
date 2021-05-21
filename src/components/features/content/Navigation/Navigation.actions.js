// 9fbef606107a605d69c0edbcd8029e5d 
import NAVIGATION_CONSTANTS, {
  // FETCH_NAVIGATION_DATA,
  // MERGE_AND_LOAD_NAVIGATION_DATA,
} from './Navigation.constants';



export const getNavigation = () => {
  return {
    type: NAVIGATION_CONSTANTS.GET_NAVIGATION,
  };
};

export const setNavigation = (payload) => {
  return {
    type: NAVIGATION_CONSTANTS.SET_NAVIGATION,
    payload
  };
};

export const openL2Panel = (panelData, mainCategory, order) => {
  return {
    panelData,
    mainCategory,
    order,
    type: NAVIGATION_CONSTANTS.OPEN_L2_PANEL,
  };
};

export const openL2Drawer = payload => {
  return {
    payload,
    type: NAVIGATION_CONSTANTS.OPEN_L2_DRAWER,
  };
};

export const hideL2Drawer = payload => {
  return {
    payload,
    type: NAVIGATION_CONSTANTS.HIDE_L2_DRAWER,
  };
};

export const removeL1Focus = payload => {
  return {
    payload,
    type: NAVIGATION_CONSTANTS.REMOVE_L1_FOCUS,
  };
};


