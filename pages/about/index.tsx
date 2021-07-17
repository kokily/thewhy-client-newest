import { NextPage } from 'next';
import Head from 'next/head';
import PageTemplate from '../../components/common/PageTemplate';
import About from '../../components/about/About';

const AboutPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>더와이컨설팅을 소개합니다. - 더와이컨설팅</title>
        <link ref="canonical" href="https://thewhy.kr/about" />
      </Head>

      <PageTemplate>
        <About />
      </PageTemplate>
    </>
  );
};

export default AboutPage;