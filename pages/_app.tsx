import type { AppProps } from "next/app";
import Router from "next/router";
import NProgress from "nprogress";
import { ThemeProvider } from "styled-components";
import { ToastProvider } from "react-toast-notifications";
import "nprogress/nprogress.css";

import GlobalStyle from "../utils/globalStyles";
import theme from "../utils/theme";

// Binding events (Page preloader).

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <ToastProvider placement="bottom-center">
        <GlobalStyle />
        <Component {...pageProps} />
      </ToastProvider>
    </ThemeProvider>
  );
}

export default MyApp;
