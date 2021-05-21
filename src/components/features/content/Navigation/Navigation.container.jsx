// 9fbef606107a605d69c0edbcd8029e5d
import React, { useEffect } from "react";
import { connect } from "react-redux";
import NavigationView from "./views";
import { getNavigationState } from "./Navigation.selectors";
import { getNavigation } from "./Navigation.actions";

export const NavigationContainer = (props) => {
  const { getNavigationData } = props;
  useEffect(() => {
    getNavigationData();
  }, [getNavigationData]);

  return <NavigationView {...props} />;
};

const mapStateToProps = (state) => {
  return { navigationData: getNavigationState(state) };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getNavigationData: () => {
      dispatch(getNavigation());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavigationContainer);
