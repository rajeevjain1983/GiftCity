import React from "react";
import withStyle from "../../../../common/hoc/withStyle";
import styles from "../style/ProductListing.style";

const ProductListing = ({ className }) => {
  return (
    <div className={className}>
      <h2>ProductListing</h2>
      <p>THIS PAGE IS UNDER CONSTRUCTION!</p>
    </div>
  );
};

export default withStyle(ProductListing, styles);
