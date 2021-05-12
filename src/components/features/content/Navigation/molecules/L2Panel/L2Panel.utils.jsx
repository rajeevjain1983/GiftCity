// 9fbef606107a605d69c0edbcd8029e5d
import React from "react";
import PropTypes from "prop-types";
import { getViewportInfo } from "../../../../../../utils";
import { keyboard } from "../../../../../../constants/keyboard.constants";

const UNIDENTIFIED_GROUP = "UNIDENTIFIED_GROUP";
const MAX_ITEMS_IN_COL = 8;
const CONDITIONAL_MAX_ITEMS_IN_COL = 7;
const FOUR_COL = 4;
const TWO_COL = 2;

const NESTED_L2_CATEGORIES = ["47504", "14505"];

const renderArrowIcon = (hasSubCategories, label) => {
  return (
    hasSubCategories && <span data-group-id={label} className="icon-arrow" />
  );
};

const renderLabel = (classForRedContent, promoBadge, name) => {
  const labelToPrint = name;
  return (
    <span
      className={`nav-bar-item-label ${classForRedContent} ${
        !promoBadge ? "full-width" : ""
      }`}
    >
      {labelToPrint}
    </span>
  );
};

/**
 * This function will return whether the next column after unbxd data is shop by size or not.
 * @param {*} categoryLayout
 */
const isNextColShopBySize = (categoryLayout) => {
  if (categoryLayout) {
    const [categoryData] = categoryLayout;
    if (categoryData) {
      const { name } = categoryData;
      return name === "shopBySizeTwoColumns";
    }
  }
  return false;
};

const getColumnToDisplay = (panelCount, visibleItem) => {
  return panelCount + visibleItem > MAX_ITEMS_IN_COL ? FOUR_COL : TWO_COL;
};

const getIsNestedL2 = (l1Id, disableBabyL2Nesting) =>
  !disableBabyL2Nesting &&
  getViewportInfo() &&
  !getViewportInfo().isDesktop &&
  NESTED_L2_CATEGORIES.indexOf(l1Id) !== -1;

const getLargeColCount = (totalItemsCount) =>
  totalItemsCount > MAX_ITEMS_IN_COL ? FOUR_COL : TWO_COL;

const getColClass = (firstCol, secondCol) =>
  firstCol.length && secondCol.length ? "half-width" : "";

/* Method to close L2Drawer on keydown(ENTER and SPACE) */
const keydownHideL2Drawer = (e, hideL2Drawer) => {
  const { KEY_ENTER, KEY_SPACE } = keyboard;
  if (e.which === KEY_ENTER || e.which === KEY_SPACE) {
    hideL2Drawer(e);
  }
};

const getHideOnMobileClass = (category) =>
  category === UNIDENTIFIED_GROUP ? "s-display-none" : "";

const getNoBorderClass = (isLastPanelCol, isShopBySizeCol) =>
  isLastPanelCol && !isShopBySizeCol ? "no-border" : "";

const getTempPanelDataCount = (isLastPanelCol, tempPanelDataCount) =>
  isLastPanelCol ? 0 : tempPanelDataCount;

const getHeadingText = (nestedL2Group, name) => nestedL2Group || name;

const L2PropTypes = {
  className: PropTypes.string.isRequired,
  panelData: PropTypes.shape([]).isRequired,
  categoryLayout: PropTypes.shape([]),
  name: PropTypes.string.isRequired,
  hideL2Drawer: PropTypes.func.isRequired,
  l1Index: PropTypes.number,
  openL3Drawer: PropTypes.func.isRequired,
  hideL3Drawer: PropTypes.func.isRequired,
  closeNav: PropTypes.func.isRequired,
  l3Drawer: PropTypes.shape({}).isRequired,
  accessibilityLabels: PropTypes.shape({
    previousButton: PropTypes.string,
  }).isRequired,
  analyticsData: PropTypes.string.isRequired,
  l1Id: PropTypes.string.isRequired,
  trackNavigation: PropTypes.func.isRequired,
  isShopBySizeAbTestOff: PropTypes.bool.isRequired,
  disableBabyL2Nesting: PropTypes.bool,
};

const L2DefaultPropTypes = {
  categoryLayout: [],
  disableBabyL2Nesting: false,
  l1Index: 0,
};

export default {
  MAX_ITEMS_IN_COL,
  CONDITIONAL_MAX_ITEMS_IN_COL,
  FOUR_COL,
  TWO_COL,
  renderArrowIcon,
  renderLabel,
  isNextColShopBySize,
  getColumnToDisplay,
  getIsNestedL2,
  getLargeColCount,
  getColClass,
  keydownHideL2Drawer,
  getHideOnMobileClass,
  getNoBorderClass,
  getTempPanelDataCount,
  getHeadingText,
  L2PropTypes,
  L2DefaultPropTypes,
};
