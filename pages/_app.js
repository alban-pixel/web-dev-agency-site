import Head from "next/head";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "../context/LanguageContext";

import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => (
  <LanguageProvider>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" type="image/png" href="/maltos_logo_clair.png?v=2" />
      <link rel="shortcut icon" href="/maltos_logo_clair.png?v=2" />
      <link rel="apple-touch-icon" href="/maltos_logo_clair.png?v=2" />
      <link rel="preconnect" href="https://stijndv.com" />
    </Head>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Component {...pageProps} />
    </ThemeProvider>
  </LanguageProvider>
);

export default MyApp;
