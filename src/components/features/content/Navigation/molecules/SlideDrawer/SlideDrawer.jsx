import React from "react";
import withStyles from "../../../../../common/hoc/withStyle";
import style from "./SlideDrawer.style";
import {
  disableBodyScroll,
  enableBodyScroll,
  isMobileWeb,
} from "../../../../../../utils";
import { BodyCopy } from "../../../../../common/atoms";
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
          <div className="customer-name-container hide-on-desktop">
            <div className="avatar-icon nav-sprite-2"></div>
            <BodyCopy
              component="span"
              className="elem-pt-XXXS"
              fontWeight="extrabold"
            >
              Hello, Rajeev
            </BodyCopy>
          </div>
          <div className="horizontal-divider elem-pt-XS hide-on-desktop" />
          <div className="nav-list">{children}</div>
        </div>
      </div>
    );
  }
}

export { SlideDrawer as SlideDrawerVanilla };
export default withStyles(SlideDrawer, style);
