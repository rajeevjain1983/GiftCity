import { call, takeLatest, put } from 'redux-saga/effects';
import NAVIGATION_CONSTANTS from "./Navigation.constants";
import {getNavigationData} from "../../../../service/abstractors/Home/home";
import {setNavigation} from "./Navigation.actions";

export function* getNavigation() {
  try {
    const result = yield call(getNavigationData);
    yield put(setNavigation(result));
  } catch (err) {
    yield null;
  }
}

export function* NavigationSaga() {
  yield takeLatest(NAVIGATION_CONSTANTS.GET_NAVIGATION, getNavigation);
}

export default NavigationSaga;
