import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import globalReducer from "../reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import globalSaga from "../saga";
const configureStore = (preloadedState) => {
  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [sagaMiddleware];

  const enhancers = [applyMiddleware(...middlewares)];
  const composeEnhancers =
    typeof window === "object" ? composeWithDevTools : compose;

  const store = createStore(
    globalReducer,
    preloadedState,
    composeEnhancers(...enhancers)
  );

  store.sagaTask = sagaMiddleware.run(globalSaga);


  return store;
};

export default configureStore;
