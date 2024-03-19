import React from "react";
import { Provider } from "react-redux";
import { AppProps } from "next/app";
import { PersistGate } from "redux-persist/integration/react";
import { PersistedStore, wrapper } from "@/redux/store";
import Layout from "./Layout";

function AppContainer({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={(store as PersistedStore).__persistor}>
        <Layout>
          <Component {...props} />
        </Layout>
      </PersistGate>
    </Provider>
  );
}

export default AppContainer;
