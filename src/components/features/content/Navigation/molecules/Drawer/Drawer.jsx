// 9fbef606107a605d69c0edbcd8029e5d
import React from "react";
import withStyles from "../../../../../common/hoc/withStyle";
import { breakpoints } from "../../../../../../../styles/themes/mediaQuery";
import {
  showOverlay,
  closeOverlay,
  enableBodyScroll,
  disableBodyScroll,
  removeBodyScrollLocks,
  isMobileWeb,
} from "../../../../../../utils";
import { Row } from "../../../../../common/atoms";
import style from "./Drawer.style";

/**
 * Determines if Drawer is not required on all view ports
 * @param {Bool} small
 * @param {Bool} medium
 * @param {Bool} large
 */
const isDrawerNotRequiredOnAllViewports = (small, medium, large) => {
  return !(small && medium && large);
};

const hideOnViewport = (viewport) => {
  return `${!viewport.small ? "display-small-none" : ""} ${
    !viewport.medium ? "display-medium-none" : ""
  } ${!viewport.large ? "display-large-none" : ""}`;
};

const showOnViewport = (viewport) => {
  return `${viewport.small ? "display-small-none" : ""} ${
    viewport.medium ? "display-medium-none" : ""
  } ${viewport.large ? "display-large-none" : ""}`;
};

const renderDrawerFooter = (hideNavigationFooter, drawerFooter) => {
  const Footer = drawerFooter;
  let classToHide = "";
  if (hideNavigationFooter) {
    classToHide = "is-hidden";
  }
  return (
    drawerFooter && (
      <Footer
        className={`navigation-footer ${classToHide}`}
        isNavigationFooter
      />
    )
  );
};

class Drawer extends React.Component {
  constructor(props) {
    super(props);
    this.darkOverlayClass = "dark-overlay";
  }

  componentDidMount() {
    if (this.drawerRef && isMobileWeb()) {
      this.drawerRef.addEventListener("touchstart", this.handleInputBlur);
      this.drawerRef.addEventListener("resize", this.getDrawerStyle);
    }
  }

  componentDidUpdate() {
    this.init();
  }

  componentWillUnmount() {
    const darkOverlay = document.getElementsByClassName(
      this.darkOverlayClass
    )[0];
    if (this.drawerRef && isMobileWeb()) {
      this.drawerRef.removeEventListener("touchstart", this.handleInputBlur);
      this.drawerRef.removeEventListener("resize", this.getDrawerStyle);
    }
    if (darkOverlay) {
      darkOverlay.removeEventListener("click", this.closeNavOnOverlayClick);
    }
    enableBodyScroll(this.scrollTargetElement);
  }

  /**
   * To hide the keyboard in case user scrolls through navigation menu.
   */
  handleInputBlur = () => {
    if (document.activeElement.nodeName === "INPUT") {
      document.activeElement.blur();
    }
  };

  init = () => {
    const { open, renderOverlay } = this.props;
    if (!open) {
      removeBodyScrollLocks();
    }
    if (renderOverlay) {
      this.getDrawerStyle();
    }

    const darkOverlay = document.getElementsByClassName(
      this.darkOverlayClass
    )[0];
    if (open && darkOverlay) {
      darkOverlay.addEventListener("click", this.closeNavOnOverlayClick);
    } else if (darkOverlay) {
      darkOverlay.removeEventListener("click", this.closeNavOnOverlayClick);
    }
    return null;
  };

  /* Set drawer ref */
  setDrawerRef = (node) => {
    this.drawerRef = node;
  };

  /* Method to close nav bar on click of dark overlay */
  closeNavOnOverlayClick = () => {
    const { close, open } = this.props;

    if (open && typeof close === "function") {
      close();
      enableBodyScroll(this.scrollTargetElement);
    }
  };

  handleUserName = (userName) => {
    return userName.length <= 15
      ? userName
      : userName.substring(0, 15).concat("...");
  };

  handleUserRewards = (userRewards) => {
    return userRewards % 1 ? userRewards : Math.floor(userRewards);
  };

  disableScroll = (drawer) => {
    const { open } = this.props;
    this.scrollTargetElement = drawer;
    if (open && this.scrollTargetElement) {
      disableBodyScroll(this.scrollTargetElement);
    }
  };

  /**
   * Function to calculate the height of the visible smart banner for hamburger menu
   */
  getAppBannerHeight = () => {
    let bannerHeight = 0;
    const appBanner = document.getElementsByClassName("app-banner-wrapper")[0];
    const appBannerBoundaries = appBanner
      ? appBanner.getBoundingClientRect()
      : null;

    if (
      appBannerBoundaries &&
      appBannerBoundaries.top + appBannerBoundaries.height > -1
    ) {
      bannerHeight =
        appBannerBoundaries.top < 0
          ? appBannerBoundaries.height + appBannerBoundaries.top
          : appBannerBoundaries.height;
    }
    return bannerHeight;
  };

  /* Style for drawer to make it scrollable within */
  getDrawerStyle = () => {
    if (window) {
      const drawer = document.getElementById("tcp-nav-drawer");
      const headerTopNav = document.getElementsByClassName("header-topnav")[0];
      const middleNav = document.getElementsByClassName("header-middle-nav")[0];
      const condensedHeader = document.getElementById("condensedHeader");
      const userInfo = document.getElementById("sideNavUserInfo");
      const darkOverlay = document.getElementsByClassName(
        this.darkOverlayClass
      )[0];
      const userInfoHeight = userInfo
        ? userInfo.getBoundingClientRect().height
        : null;
      const wHeight = window.innerHeight;
      const {
        values: { lg },
      } = breakpoints;

      if (window.innerWidth < lg && drawer) {
        const headerTopNavComp = headerTopNav.getBoundingClientRect();
        const headerMiddleNavComp = middleNav.getBoundingClientRect();
        let headerHeight =
          headerTopNavComp.height +
          headerMiddleNavComp.height +
          this.getAppBannerHeight();

        if (headerTopNav && headerTopNavComp.top < 0) {
          headerHeight -= Math.abs(headerTopNavComp.top);
        }

        if (condensedHeader) {
          headerHeight = condensedHeader.getBoundingClientRect().height;
        }
        userInfo.style.top = `${headerHeight}px`;
        drawer.style.height = `${wHeight - (headerHeight + userInfoHeight)}px`;
        drawer.style.position = "fixed";
        drawer.style.overflowY = "scroll";
        drawer.style.top = `${headerHeight + userInfoHeight}px`;
        darkOverlay.style.top = `${headerHeight}px`;
        darkOverlay.style.position = "fixed";

        this.disableScroll(drawer);
      }
    }
  };

  render() {
    const {
      children,
      className,
      small,
      medium,
      large,
      open,
      id,
      close,
      renderOverlay,
      drawerFooter,
      hideNavigationFooter,
      showCondensedHeader,
      drawerElemId,
      navigationLevel,
    } = this.props;

    let openDrawer = open;
    if (typeof open === "string") {
      openDrawer = open === id;
    }
    // if (close && renderOverlay) {
    //   closeOverlay();
    // }
    // if (openDrawer && renderOverlay) {
    //   showOverlay();
    // }
    const classToOpen = openDrawer
      ? `tcp-drawer__isOpen_${navigationLevel}`
      : "";
    const condensedHeader = showCondensedHeader ? " tcp-condensed-drawer" : "";
    const classToHideOnViewports = hideOnViewport({ small, medium, large });
    const classToShowOnViewports = showOnViewport({ small, medium, large });

    return (
      <div className={className} ref={this.setDrawerRef} id={drawerElemId}>
        {
          // If Drawer is not required on all viewports then duplicate the DOM for the children without Drawer
          // User will have to handle display of this element with CSS
          isDrawerNotRequiredOnAllViewports(small, medium, large) && (
            <div className={`${classToShowOnViewports}`}>{children}</div>
          )
        }
        {openDrawer && (
          <React.Fragment>
            <aside
              className={`${classToOpen}${condensedHeader} ${classToHideOnViewports}`}
            >
              <div id="tcp-nav-drawer" className="tcp-drawer-content">
                {children}
              </div>
            </aside>
          </React.Fragment>
        )}
      </div>
    );
  }
}

export { Drawer as DrawerVanilla };
export default withStyles(Drawer, style);
