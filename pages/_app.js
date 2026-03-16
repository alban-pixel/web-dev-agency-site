import Head from "next/head";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "../context/LanguageContext";

import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => (
  <LanguageProvider>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" type="image/png" sizes="32x32" href="/maltos-icon.png?v=6" />
      <link rel="icon" type="image/png" sizes="16x16" href="/maltos-icon.png?v=6" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=6" />
      <link rel="shortcut icon" href="/favicon.ico?v=6" />
      <link rel="preconnect" href="https://stijndv.com" />
    </Head>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Component {...pageProps} />
    </ThemeProvider>
  </LanguageProvider>
);

export default MyApp;
