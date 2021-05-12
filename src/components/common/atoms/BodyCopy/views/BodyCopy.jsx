// 9fbef606107a605d69c0edbcd8029e5d
import React from "react";
import { PropTypes } from "prop-types";
import withStyles from "../../../hoc/withStyle";
import styles from "../BodyCopy.style";

const renderComponent = (compProps) => {
  const {
    Component,
    className,
    dataLocator,
    children,
    customStyle,
    ...others
  } = compProps;
  return (
    <Component
      className={className}
      data-locator={dataLocator}
      style={customStyle}
      {...others}
    >
      {children}
    </Component>
  );
};

const BodyCopy = (props) => {
  const {
    children,
    className,
    fontFamily,
    component: Component,
    fontSize,
    fontWeight,
    lineHeight,
    letterSpacing,
    textAlign,
    color,
    dataLocator,
    link,
    customStyle,
    ...others
  } = props;

  const compProps = {
    Component,
    className,
    dataLocator,
    children,
    customStyle,
    ...others,
  };
  if (!link) {
    return renderComponent(compProps);
  }
};

const fontFamilyPropTypes = PropTypes.oneOf(["primary", "secondary"]);
const fontWeightPropTypes = PropTypes.oneOf([
  "regular",
  "semibold",
  "extrabold",
  "black",
]);
const letterSpacingPropTypes = PropTypes.oneOf([
  "ls271",
  "ls257",
  "ls222",
  "ls167",
  "normal",
]);
const textAlignPropTypes = PropTypes.oneOf(["left", "center", "right"]);
const colorPropTypes = PropTypes.oneOf([
  "text.primary",
  "text.secondary",
  "text.hint",
  "text.disabled",
  "white",
]);
const fontSizesPropTypes = PropTypes.oneOf([
  "fs48",
  "fs42",
  "fs36",
  "fs32",
  "fs28",
  "fs24",
  "fs22",
  "fs18",
  "fs16",
  "fs15",
  "fs14",
  "fs12",
  "fs10",
  "fs9",
]);

BodyCopy.defaultProps = {
  component: "p",
  className: null,
  children: null,
  fontFamily: "primary",
  fontSize: 12,
  fontWeight: "regular",
  lineHeight: "normal",
  letterSpacing: "normal",
  textAlign: "left",
  color: "text.primary",
  link: null,
  customStyle: {},
};

BodyCopy.propTypes = {
  component: PropTypes.elementType,
  className: PropTypes.string,
  children: PropTypes.node,
  fontFamily: PropTypes.oneOfType([
    PropTypes.arrayOf(fontFamilyPropTypes),
    fontFamilyPropTypes,
  ]),
  fontSize: PropTypes.oneOfType([
    PropTypes.arrayOf(fontSizesPropTypes),
    fontSizesPropTypes,
  ]),
  fontWeight: PropTypes.oneOfType([
    PropTypes.arrayOf(fontWeightPropTypes),
    fontWeightPropTypes,
  ]),
  lineHeight: PropTypes.oneOf(["normal"]),
  letterSpacing: PropTypes.oneOfType([
    PropTypes.arrayOf(letterSpacingPropTypes),
    letterSpacingPropTypes,
  ]),
  textAlign: PropTypes.oneOfType([
    PropTypes.arrayOf(textAlignPropTypes),
    textAlignPropTypes,
  ]),
  color: PropTypes.oneOfType([
    PropTypes.arrayOf(colorPropTypes),
    colorPropTypes,
  ]),
  dataLocator: PropTypes.string,
  link: PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    target: PropTypes.string,
    text: PropTypes.string,
  }),
  customStyle: PropTypes.shape({}),
};

const StyledBodyCopy = withStyles(BodyCopy, styles);
StyledBodyCopy.defaultProps = BodyCopy.defaultProps;

export { BodyCopy as BodyCopyVanilla };
export default StyledBodyCopy;
