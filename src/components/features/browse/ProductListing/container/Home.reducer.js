import { fromJS } from 'immutable';
import HOME_CONSTANTS from '../Home.constants';

const initialState = fromJS({
  navigationData: null,
  
});

const HomeReducer = (state = initialState,action) => {
  switch (action.type) {  
    case HOME_CONSTANTS.SET_NAVIGATION:
      return { ...state, ...{ navigationData: action.payload } };
    default:
      return state;
  }
};

export default HomeReducer;
