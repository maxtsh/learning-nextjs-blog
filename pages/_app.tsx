import Head from "next/head";
import GlobalStyles, { Container } from "styles/Global";
import type { AppProps } from "next/app";
import Header from "components/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Head>
        <link rel="icon" href="/fav.jpeg" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <GlobalStyles />
    </Container>
  );
}

export default MyApp;
