import React from "react";
import Router from "next/router";
import { getNewsDataFromApi } from "../../../../service/NewsApi";
import NewsView from "../views";

export class NewsContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      news: null,
    };

    this.syncLocalStorage = this.syncLocalStorage.bind(this);
    this.updateLocalStorage = this.updateLocalStorage.bind(this);
    this.hideComment = this.hideComment.bind(this);
    this.upVotes = this.upVotes.bind(this);
    this.getNewsData = this.getNewsData.bind(this);
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.syncLocalStorage();
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
    const { news } = this.state;
    const pageNumber = Router.query && Router.query.p ? Router.query.p : 1;

    if (news.pageInfo.pageNumber !== parseInt(pageNumber)) {
      this.syncLocalStorage();
    }
  }

  async syncLocalStorage() {
    const pageNumber = Router.query && Router.query.p ? Router.query.p : 1;
    if (localStorage.getItem(pageNumber) === null) {
      console.log(`No Data for Page Number:${pageNumber}`);
      const newsData = await this.getNewsData();
      newsData && this.setState({ news: newsData }, this.updateLocalStorage);
      console.log(
        `Set Data in localStorage for Page Number:${pageNumber}`,
        newsData
      );
    } else {
      const newsData = localStorage.getItem(pageNumber);
      this.setState({ news: JSON.parse(newsData) });
      console.log(`Get Data from localStorage for Page Number:${pageNumber}`);
    }
  }

  // Gets news Data from Props if Data is already loaded from server else will be fetch fro api
  async getNewsData() {
    const pageNumber = Router.query && Router.query.p ? Router.query.p : 1;

    console.log("getNewsData", this.props.newsData, pageNumber);
    if (
      this.props.newsData &&
      this.props.newsData.pageInfo.pageNumber === parseInt(pageNumber)
    ) {
      // News Data is already setup from Server
      console.log("Get Data from Props");
      return this.props.newsData;
    } else {
      //Api Call to set News Data
      const p = Router.query && Router.query.p ? Router.query.p : 0;
      const apiPageNumber = p > 0 ? p - 1 : 0;
      const newsData = await getNewsDataFromApi(apiPageNumber);
      console.log("Get Data from api call");
      return newsData;
    }
  }

  updateLocalStorage() {
    const pageNumber = Router.query && Router.query.p ? Router.query.p : 1;
    localStorage.setItem(pageNumber, JSON.stringify(this.state.news));
  }

  // Hide Story
  hideComment(index) {
    console.log("hide Index", index);
    const newsData = { ...this.state.news };
    const newsItem = newsData.newsList.filter((data) => {
      return data.index === index;
    });
    newsItem[0].hide = true;
    this.setState({ news: newsData }, this.updateLocalStorage);
  }

  //up votes when click on arrow
  upVotes(index) {
    const newsData = { ...this.state.news };
    const newsItem = newsData.newsList.filter((data) => {
      return data.index === index;
    });
    newsItem[0].upVotes++;
    this.setState({ news: newsData }, this.updateLocalStorage);
  }

  render() {
    const { news } = this.state;
    return (
      news && (
        <NewsView
          hideComment={this.hideComment}
          upVotes={this.upVotes}
          news={news}
        />
      )
    );
  }
}

//Server side rendering || Getting data from API and setting props
NewsContainer.getInitialProps = async (context) => {
  const p = context && context.query && context.query.p ? context.query.p : 0;
  // page Number start in api from 0 index so need to subtract -1
  const apiPageNumber = p > 0 ? p - 1 : 0;

  const newsData = await getNewsDataFromApi(apiPageNumber);
  console.log("getInitialProps");
  return { newsData };
};

export default NewsContainer;
