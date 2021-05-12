import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import {
  HOME_REDUCER_KEY,
  NAVIGATION_REDUCER_KEY
} from "../../constants/reducer.constants";
import HomeReducer from "../../components/features/content/Home/container/Home.reducer";
import NavigationReducer from "../../components/features/content/Navigation/Navigation.reducer";

export default combineReducers({
  [HOME_REDUCER_KEY]: HomeReducer,
  [NAVIGATION_REDUCER_KEY]:NavigationReducer,
  form: formReducer,
});
