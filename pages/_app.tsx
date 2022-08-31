import type { AppProps } from "next/app";
import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../utils/globalStyles";
import theme from "../utils/theme";

// Binding events (Page preloader).

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
