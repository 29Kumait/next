import React, { StrictMode } from "react";
import type { AppProps } from "next/app";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StrictMode>
      <Component {...pageProps} />
    </StrictMode>
  );
}

export default MyApp;
