import React from "react";
import Link from "next/link";
import NewsRow from "./NewsRow";
import withStyle from "../../../common/hoc/withStyle";
import styles from "../style/News.style";
import Header from "../../content/Header";
import Footer from "../../content/Footer";

const renderNewsData = (news, hideComment, upVotes) => {
  return (
    news &&
    news.newsList.map((data, index) => {
      return (
        data &&
        data.hide === false && (
          <NewsRow
            hideButtonHandler={hideComment}
            upVotesButtonHandler={upVotes}
            key={data.index}
            data={data}
            rowNumber={index + 1}
          />
        )
      );
    })
  );
};
const NewsView = ({ className, news, hideComment, upVotes }) => {
  const {
    pageInfo: { pageNumber, totalPages },
  } = news;
  const nextPageURL =
    pageNumber < totalPages ? `/news?p=${news.pageInfo.nextPage}` : "/";
  return (
    <div className={className}>
      <Header />
      <div className="nav-bar"></div>
      <div>
        <img className="product-container" alt="Logo" src="products.png" />
      </div>
    </div>
  );
};

export default withStyle(NewsView, styles);
