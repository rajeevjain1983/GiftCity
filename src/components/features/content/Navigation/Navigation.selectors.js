// 9fbef606107a605d69c0edbcd8029e5d
import { createSelector } from 'reselect';
import { NAVIGATION_REDUCER_KEY } from '../../../../constants/reducer.constants';

const getState = state => state[NAVIGATION_REDUCER_KEY];

export const getNavigationState = createSelector(
  getState,
  state => state?.navigationData
);
