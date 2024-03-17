import type { AppProps } from "next/app";
import AppContainer from "@/components/AppContainer";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return <AppContainer Component={Component} pageProps={pageProps} />;
}
