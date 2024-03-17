import React from "react";
import { Provider } from "react-redux";
import { AppProps } from "next/app";
import { store } from "@/redux/store";
import Layout from "./Layout";

function AppContainer({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default AppContainer;
