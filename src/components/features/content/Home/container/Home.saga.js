import { call, takeLatest, put, select } from 'redux-saga/effects';
import HOME_CONSTANTS from "../Home.constants";
import {getNavigationData} from "../../../../../service/abstractors/Home/home";
import {setNavigation} from "./Home.actions";

export function* getNavigation() {
  try {
    const result = yield call(getNavigationData);
    yield put(setNavigation(result));
  } catch (err) {
    yield null;
  }
}

export function* HomeSaga() {
  yield takeLatest(HOME_CONSTANTS.GET_NAVIGATION, getNavigation);
}

export default HomeSaga;
