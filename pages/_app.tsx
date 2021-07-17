import Head from 'next/head';
import { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import GlobalStyle from '../libs/styles';
import { RecoilRoot } from 'recoil';
import { useApollo } from '../libs/apollo/client';

function MyApp({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps);

  return (
    <>
      <Head>
        <title>더와이컨설팅 - The Why Consulting</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1.0, shrink-to-fit=no"
        />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"
          rel="stylesheet"
        />
        <script src="//dapi.kakao.com/v2/maps/sdk.js?appkey=cec30f2d8f996a53cca24b45925dea37&libraries=services" />
      </Head>
      <GlobalStyle />

      <ApolloProvider client={client}>
        <RecoilRoot>
          <Component {...pageProps} />
        </RecoilRoot>
      </ApolloProvider>
    </>
  );
}

export default MyApp;
