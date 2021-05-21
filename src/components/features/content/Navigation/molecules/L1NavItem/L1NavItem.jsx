// 9fbef606107a605d69c0edbcd8029e5d
import React from "react";
import Link from "next/link";
import withStyles from "../../../../../common/hoc/withStyle";
import { BodyCopy } from "../../../../../common/atoms";
import { getViewportInfo } from "../../../../../../utils";
import style from "./L1NavItem.style";
import { DELAY_TO_OPEN } from "./L1NavItem.config";

class L1NavItem extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      hovered: false,
    };
    this.timeOutHandler = null;
  }

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

  onClickHandler = (e) => {
    if (!getViewportInfo().isDesktop) {
      clearTimeout(this.timeOutHandler);
      this.timeOutHandler = setTimeout(() => {
        const { hovered } = this.state;
        this.setState({ hovered: !hovered });
      }, DELAY_TO_OPEN);
    }
    e.preventDefault();
    e.stopPropagation();
  };

  /**
   * This function toggle hovered state of drawer and bind/unbind keydown
   * @param {Boolean} isHovered
   * @param {*} onClick
   */
  setHoveredState = (isHovered) => {
    this.setState({
      hovered: isHovered,
    });
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
   * To render the l1 content\
   */
  renderL1Content = (displayName) => {
    return (
      <div className="nav-bar-l1-content">
        <span className="nav-bar-item-label">{displayName}</span>

        <span className="icon-arrow hide-on-desktop" />
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

      ...others
    } = this.props;

    const { hovered } = this.state;

    let classForHovered = "";
    if (hovered) {
      classForHovered = "is-open";
      this.childRendered = true;
    }

    return (
      <React.Fragment>
        <BodyCopy
          component="li"
          className={`${className} ${classForHovered} nav-bar-l1-item  `}
          data-locator={dataLocator}
          onMouseEnter={this.onHover}
          onMouseLeave={this.onMouseLeave}
          onClick={this.onClickHandler}
          id={dataLocator}
          role="menuitem"
          {...others}
        >
          <Link
            href=""
            onKeyDown={this.onKeyPressed}
            aria-expanded={!!classForHovered}
          >
            {this.renderL1Content(displayName, index)}
          </Link>
          {(hovered || this.childRendered) && children}
        </BodyCopy>
      </React.Fragment>
    );
  }
}

export { L1NavItem as L1NavItemVanilla };
export default withStyles(L1NavItem, style);
