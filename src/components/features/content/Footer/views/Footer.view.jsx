import React from "react";
import withStyle from "../../../../common/hoc/withStyle";
import styles from "../style/Footer.style";

const Footer = ({ className }) => {
  return <div className={className} />;
};

export default withStyle(Footer, styles);
