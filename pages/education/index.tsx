import { NextPage } from 'next';
import Head from 'next/head';
import PageTemplate from '../../components/common/PageTemplate';
import Service from '../../components/education/Service';

const ServicePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>서비스 커뮤니케이션 - 더와이컨설팅</title>
        <link rel="canonical" href="https://thewhy.kr/education" />
        <meta
          name="keywords"
          content="서비스강사,친절교육,서비스마인드,고객경험관리,서비스교육,전화응대교육,불만고객응대,서비스매뉴얼,전화응대교육"
        />
        <meta
          name="description"
          content="커뮤니케이션 교육, 맞춤화된 교육 프로그램 제시"
        />
      </Head>
      <PageTemplate>
        <Service />
      </PageTemplate>
    </>
  );
}

export default ServicePage;