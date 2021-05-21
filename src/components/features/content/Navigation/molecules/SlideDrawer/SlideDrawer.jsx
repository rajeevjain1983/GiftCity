import React from "react";
import withStyles from "../../../../../common/hoc/withStyle";
import style from "./SlideDrawer.style";
const SlideDrawer = (props) => {
  const { children } = props;
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }
  return (
    <div className={props.className}>
      <div className={drawerClasses}>{children}</div>
    </div>

    // <>{children}</>
  );
};

export { SlideDrawer as SlideDrawerVanilla };
export default withStyles(SlideDrawer, style);
