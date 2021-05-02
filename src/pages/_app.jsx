import React from "react";
import App from "next/app";
import GlobalStyle from "../styles/globalStyles";

class NewsHackerApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <GlobalStyle />
        <title>Gift City</title>
        <Component {...pageProps} />
      </>
    );
  }
}

export default NewsHackerApp;
