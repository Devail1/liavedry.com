import { Provider } from "react-redux";
import React from "react";
import { store } from "@/redux/store";
import Layout from "./Layout";

const AppContainer = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
};

export default AppContainer;
