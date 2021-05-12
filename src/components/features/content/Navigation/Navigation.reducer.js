import { fromJS } from 'immutable';
import NAVIGATION_CONSTANTS from './Navigation.constants';

const initialState = fromJS({
  navigationData: null,
  
});

const NavigationReducer = (state = initialState,action) => {
  switch (action.type) {  
    case NAVIGATION_CONSTANTS.SET_NAVIGATION:
      return { ...state, ...{ navigationData: action.payload } };
      case NAVIGATION_CONSTANTS.OPEN_L2_PANEL:
      return {
        ...state,
        ...action,
        openPanel: true,
      };
    case NAVIGATION_CONSTANTS.OPEN_L2_DRAWER:
      return {
        ...state,
        openDrawer: action.payload,
        closeDrawer: false,
      };
    case NAVIGATION_CONSTANTS.HIDE_L2_DRAWER:
      return {
        ...state,
        closeDrawer: true,
        openDrawer: false,
        hideNavigationFooter: false,
      };
    case NAVIGATION_CONSTANTS.REMOVE_L1_FOCUS:
      return {
        ...state,
        removeL1Focus: action.payload,
      };
    default:
      return state;
  }
};

export default NavigationReducer;
