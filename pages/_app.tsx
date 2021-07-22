import Head from 'next/head';
import { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import GlobalStyle from '../libs/styles';
import { RecoilRoot } from 'recoil';
import { useApollo } from '../libs/apollo/client';
import 'react-quill/dist/quill.snow.css';

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
        <meta
          name="keywords"
          content="커뮤니케이션, 교육, 커뮤니케이션 교육 강의, 더와이컨설팅, 더와이, The Y ConsulTing, Y"
        />
        <meta
          name="description"
          content="더와이컨설팅은 개인과 조직의 행복한 관계를 꿈꾸는 커뮤니케이션 교육 전문기업입니다"
        />
        <meta name="author" content="thewhy.kr" />
        <meta property="og:title" content="더와이컨설팅" />
        <meta
          property="og:description"
          content="더와이컨설팅은 개인과 조직의 행복한 관계를 꿈꾸는 커뮤니케이션 교육 전문기업입니다"
        />
        <meta property="og:image" content="/images/main-logo.png" />
        <meta
          name="naver-site-verification"
          content="f3f768e9435f138e44540040fb7a46bd8c6fd427"
        />
        <meta
          name="google-site-verification"
          content="m_pjAMeok3jUr2aJg_qWwvbBFERcYCjiuxWm4YE5_V4"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"
          rel="stylesheet"
        />

        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script src="//dapi.kakao.com/v2/maps/sdk.js?appkey=cec30f2d8f996a53cca24b45925dea37&libraries=services" />
      </Head>

      <ApolloProvider client={client}>
        <RecoilRoot>
          <GlobalStyle />
          <Component {...pageProps} />
        </RecoilRoot>
      </ApolloProvider>
    </>
  );
}

export default MyApp;
