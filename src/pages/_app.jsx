import React from "react";
import App from "next/app";
import withRedux from "next-redux-wrapper";
import withReduxSaga from "next-redux-saga";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { Header, Footer } from "../components/features/content";
import { LightTheme, DarKTheme } from "../../styles/themes";
import GlobalStyle from "../../styles/globalStyles";
import configureStore from "../reduxStore/store";
// import axios from "../service/axios_order";
// import { setBurgerIngredients } from "../components/features/Burger/container/Burger.actions";

class burger_app extends App {
  constructor(props) {
    super(props);
    this.state = { theme: LightTheme };
    this.toggleTheme = this.toggleTheme.bind(this);
  }

  componentDidMount() {
    console.log("App componentDidMount");
  }

  static async getInitialProps({ Component, ctx }) {
    // console.log("getInitialProps", ctx);
    // const { store } = ctx;
    // const response = await axios.get("/ingredients.json");
    // await store.dispatch(setBurgerIngredients(response.data));
    // return { pageProps: { data: response.data } };
  }

  toggleTheme() {
    if (this.state.theme.name === "lightTheme") {
      this.setState({ theme: DarKTheme });
    } else {
      this.setState({ theme: LightTheme });
    }
  }

  render() {
    console.log("Render burger_app!!", this.props);
    const { Component, pageProps, store } = this.props;
    return (
      <ThemeProvider theme={this.state.theme}>
        <Provider store={store}>
          <GlobalStyle />
          <title>Gift City</title>
          <Header toggleTheme={this.toggleTheme} />
          <Component {...pageProps} />
          <Footer />
        </Provider>
      </ThemeProvider>
    );
  }
}

export default withRedux(configureStore)(withReduxSaga(burger_app));
