import HomeSaga from "../../components/features/content/Home/container/Home.saga";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([HomeSaga()]);
}
