// 9fbef606107a605d69c0edbcd8029e5d
import React from "react";
import Link from "next/link";
import Router from "next/router";
import withStyles from "../../../../../common/hoc/withStyle";
import { BodyCopy } from "../../../../../common/atoms";
import { getViewportInfo } from "../../../../../../utils";
import { KEY_CODES } from "../../../../../../constants/keyboard.constants";
import style from "./L1NavItem.style";
import { DELAY_TO_OPEN } from "./L1NavItem.config";

const HideDrawerContext = React.createContext({});
const HideDrawerProvider = HideDrawerContext.Provider;
export const HideDrawerConsumer = HideDrawerContext.Consumer;

/**
 * This function highlights clearance links in red color on the base of id in unbxd
 * @param {*} id
 */
const highlightContent = (id) => {
  return id === "505518" || id === "454010" ? `highlighted` : ``;
};

class L1NavItem extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      hovered: false,
    };
    this.timeOutHandler = null;
  }

  componentWillUnmount() {
    document.body.removeEventListener("keydown", this.handleDocumentKeydown);
  }

  /**
   * This function handles document keydown event when L2 drawer is opened
   */
  handleDocumentKeydown = (e) => {
    const { dataLocator } = this.props;
    if (
      e.keyCode === KEY_CODES.KEY_TAB ||
      (e.keyCode === KEY_CODES.KEY_TAB && e.shiftKey) ||
      e.keyCode === KEY_CODES.KEY_ENTER ||
      e.keyCode === KEY_CODES.KEY_SPACE
    ) {
      clearTimeout(this.timeOutHandler);
      // close drawer when focused element is not part of current opened drawer
      if (
        !document.getElementById(dataLocator).contains(document.activeElement)
      ) {
        this.onMouseLeave();
      }
    }
  };

  /**
   * This function will be used to open the l2 link items
   */
  onHover = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (getViewportInfo().isDesktop) {
      clearTimeout(this.timeOutHandler);
      this.timeOutHandler = setTimeout(() => {
        this.setHoveredState(true);
      }, DELAY_TO_OPEN);
    }
  };

  /**
   * This function toggle hovered state of drawer and bind/unbind keydown
   * @param {Boolean} isHovered
   * @param {*} onClick
   */
  setHoveredState = (isHovered, onClick = () => {}) => {
    this.setState(
      {
        hovered: isHovered,
      },
      () => {
        onClick();
      }
    );
    if (isHovered && getViewportInfo().isDesktop) {
      document.body.addEventListener("keydown", this.handleDocumentKeydown);
    } else {
      document.body.removeEventListener("keydown", this.handleDocumentKeydown);
    }
  };

  /**
   * This function will be used to close the l2 links wrapper when user click on any link inside it.
   */

  hideL2Nav = () => {
    this.setHoveredState(false);
  };

  /**
   * This function will be used to close the l2 link items
   */
  onMouseLeave = () => {
    if (getViewportInfo().isDesktop) {
      clearTimeout(this.timeOutHandler);
      this.setHoveredState(false);
    }
  };

  /**
   * This function will be used to open the l2 link items on Enter/Space Press
   */
  onKeyPressed = (e) => {
    if (
      (getViewportInfo().isDesktop && e.keyCode === KEY_CODES.KEY_ENTER) ||
      e.keyCode === KEY_CODES.KEY_SPACE
    ) {
      e.preventDefault();
      this.setHoveredState(true);
    }
  };

  handleFocusBlur = () => {
    const timer = setTimeout(() => {
      document.activeElement.blur();
      clearTimeout(timer);
    }, 0);
    Router.events.off("routeChangeComplete", this.handleFocusBlur);
  };

  /**
   * This function handles if navigation drawer needs to open on current viewport or now
   * @param {*} onClick
   */
  openNavigationDrawer = (hasL2) => (e) => {
    const { onClick } = this.props;
    if (!getViewportInfo().isDesktop && hasL2) {
      e.preventDefault();
      e.stopPropagation();
      this.setHoveredState(true, onClick);
    } else if (getViewportInfo().isDesktop) {
      e.stopPropagation();
      clearTimeout(this.timeOutHandler);
      this.setHoveredState(false);
      Router.events.on("routeChangeComplete", this.handleFocusBlur);
    }
  };

  /**
   * To render the l1 content\
   */
  renderL1Content = (classForRedContent, displayName) => {
    return (
      <div className="nav-bar-l1-content">
        <span className={`nav-bar-item-label ${classForRedContent}`}>
          {displayName}
        </span>

        <span className="icon-arrow" />
      </div>
    );
  };

  render() {
    const {
      name,
      displayName,
      className,
      dataLocator,
      index,
      children,
      removeL1Focus,
      // hasL2,
      // clickData,
      // sizesRange,
      // linkOverrideUrl,
      ...others
    } = this.props;

    const { hovered } = this.state;

    let classForHovered = "";
    if (hovered) {
      classForHovered = "is-open";
      this.childRendered = true;
    }
    // If we receive flag showOnlyOnApp then we add this class to links to hide them

    // This class is used to highlight link in red color, it performs check based on id
    const classForRedContent = highlightContent(name);

    return (
      <React.Fragment>
        <HideDrawerProvider
          value={{
            hideL2Nav: this.hideL2Nav,
          }}
        >
          <BodyCopy
            component="li"
            className={`${className} ${classForHovered} nav-bar-l1-item  `}
            // fontFamily="secondary"
            fontSize={["fs13", "fs13", "fs15"]}
            fontWeight="semibold"
            // color="text.primary"
            // lineHeight="lh115"
            data-locator={dataLocator}
            onMouseEnter={this.onHover}
            onMouseLeave={this.onMouseLeave}
            id={dataLocator}
            role="menuitem"
            {...others}
          >
            <Link
              href={`c/${name}`}
              onKeyDown={this.onKeyPressed}
              onClick={this.openNavigationDrawer(true)}
              aria-expanded={!!classForHovered}
            >
              {this.renderL1Content(classForRedContent, displayName, index)}
            </Link>
            {(hovered || this.childRendered) && children}
            {/* {hovered ? (
              <div
                className={`${className} l1-overlay ${classForHovered}`}
                onMouseEnter={this.onMouseLeave}
              />
            ) : null} */}
          </BodyCopy>
        </HideDrawerProvider>
      </React.Fragment>
    );
  }
}

export { L1NavItem as L1NavItemVanilla };
export default withStyles(L1NavItem, style);
