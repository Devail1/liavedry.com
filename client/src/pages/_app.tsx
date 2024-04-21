import type { AppProps } from "next/app";
import "@mdxeditor/editor/style.css";
import "@/styles/highlight/github-dark.css";
import "@/styles/globals.css";

import AppContainer from "@/ui/containers/AppContainer";

export default function App({ Component, pageProps }: AppProps) {
  return <AppContainer Component={Component} {...pageProps} />;
}
