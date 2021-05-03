import React from "react";
import withStyle from "../../../../common/hoc/withStyle";
import styles from "../style/Home.style";

const HomeView = ({ className, news, hideComment, upVotes }) => {
  return (
    <div className={className}>
      <div className="nav-bar"></div>
      <div>
        <img className="product-container" alt="Logo" src="products.png" />
      </div>
    </div>
  );
};

export default withStyle(HomeView, styles);
