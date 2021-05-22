import React from "react";
import withStyles from "../../../../../common/hoc/withStyle";
import style from "./SlideDrawer.style";
import {
  disableBodyScroll,
  enableBodyScroll,
  isMobileWeb,
} from "../../../../../../utils";
class SlideDrawer extends React.PureComponent {
  handleBodyScroll = (drawer) => {
    const { show } = this.props;
    this.scrollTargetElement = drawer;
    if (this.scrollTargetElement) {
      show
        ? disableBodyScroll(this.scrollTargetElement)
        : enableBodyScroll(this.scrollTargetElement);
    }
  };

  /* Set drawer ref */
  setDrawerRef = (node) => {
    this.drawerRef = node;
  };

  render() {
    const { children, show, className } = this.props;
    const drawer = isMobileWeb() && document.getElementById("tcp-nav-drawer");
    drawer && this.handleBodyScroll(drawer);

    let drawerClasses = "side-drawer";
    if (show) {
      drawerClasses = "side-drawer open";
    }
    return (
      <div className={className}>
        <div
          id="tcp-nav-drawer"
          ref={this.setDrawerRef}
          className={drawerClasses}
        >
          {children}
        </div>
      </div>
    );
  }
}

export { SlideDrawer as SlideDrawerVanilla };
export default withStyles(SlideDrawer, style);
