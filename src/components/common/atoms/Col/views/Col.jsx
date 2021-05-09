// 9fbef606107a605d69c0edbcd8029e5d
// Basic file for column in the grid structure
import React from "react";
import { PropTypes } from "prop-types";
import styles from "../Col.style";
import withStyles from "../../../hoc/withStyle";

// Passing on the colConfig to the style File and also the flag to add inline-block to the column
const Col = ({
  children,
  className,
  tagName: CustomTag,
  customStyle,
  ...otherProps
}) => {
  return (
    <CustomTag style={customStyle} className={className} {...otherProps}>
      {children}
    </CustomTag>
  );
};

Col.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  colSize: PropTypes.shape({
    small: PropTypes.number,
    medium: PropTypes.number,
    large: PropTypes.number,
  }),
  hideCol: PropTypes.shape({
    small: PropTypes.bool,
    medium: PropTypes.bool,
    large: PropTypes.bool,
  }),
  tagName: PropTypes.string,
  customNthBreak: PropTypes.number,
  ignoreNthRule: PropTypes.bool,
  customStyle: PropTypes.string,
};

Col.defaultProps = {
  colSize: {
    small: 6,
    medium: 8,
    large: 12,
  },
  hideCol: {
    small: true,
    medium: false,
    large: false,
  },
  tagName: "div",
  customNthBreak: 0,
  ignoreNthRule: false,
  customStyle: {},
};

export default withStyles(Col, styles);
export { Col as ColVanilla };
