import React from "react";
import { Provider } from "react-redux";
import { AppProps } from "next/app";
import { persistor, store } from "@/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import Layout from "./Layout";

function AppContainer({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </Provider>
  );
}

export default AppContainer;
