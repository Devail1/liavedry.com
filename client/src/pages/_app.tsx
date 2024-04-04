import type { AppProps } from "next/app";
import "@/styles/globals.css";
import "@/styles/highlight/github-dark.css";
import AppContainer from "@/ui/containers/AppContainer";

export default function App({ Component, pageProps }: AppProps) {
  return <AppContainer Component={Component} {...pageProps} />;
}
