import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import {
  HOME_REDUCER_KEY,
} from "../../constants/reducer.constants";
// import OrderHistoryReducer from "../../components/features/OrderHistory/container/OrderHistory.reducer";
import HomeReducer from "../../components/features/content/Home/container/Home.reducer";

export default combineReducers({
  [HOME_REDUCER_KEY]: HomeReducer,
  form: formReducer,
});
