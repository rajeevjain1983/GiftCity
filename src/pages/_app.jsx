import React from "react";
import App from "next/app";
import withRedux from "next-redux-wrapper";
import withReduxSaga from "next-redux-saga";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { Header, Footer } from "../components/features/content";
import { CTheme, ITheme, TTheme } from "../../styles/themes";
import GlobalStyle from "../../styles/globalStyles";
import configureStore from "../reduxStore/store";

class GiftCityApp extends App {
  constructor(props) {
    super(props);
    this.state = { theme: TTheme };
    this.toggleTheme = this.toggleTheme.bind(this);
  }

  toggleTheme() {
    if (this.state.theme.name === "TTheme") {
      this.setState({ theme: TTheme });
    } else if (this.state.theme.name === "ITheme") {
      this.setState({ theme: ITheme });
    } else {
      this.setState({ theme: CTheme });
    }
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <ThemeProvider theme={this.state.theme}>
        <Provider store={store}>
          <GlobalStyle />
          <title>Gift City</title>
          <Header toggleTheme={this.toggleTheme} />
          <Component {...pageProps} />
          {/* <Footer /> */}
        </Provider>
      </ThemeProvider>
    );
  }
}

export default withRedux(configureStore)(withReduxSaga(GiftCityApp));
