import { NextPage } from 'next';
import Head from 'next/head';
import PageTemplate from '../../components/common/PageTemplate';
import Locate from '../../components/about/Locate';
import TitleHeader from '../../components/common/TitleHeader';
import useMap from './hooks/useMap';

const LocatePage: NextPage = () => {
  const kakaoMap = useMap();

  return (
    <>
      <Head>
        <title>찾아오시는 길 - 더와이컨설팅</title>
        <link ref="canonical" href="https://thewhy.kr/about/locate" />
      </Head>

      <PageTemplate>
        <TitleHeader title="오시는 길" />
        <Locate kakaoMap={kakaoMap} />
      </PageTemplate>
    </>
  );
};

export default LocatePage;