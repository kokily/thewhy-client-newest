import { NextPage } from 'next';
import Head from 'next/head';
import PageTemplate from '../../components/common/PageTemplate';
import Business from '../../components/education/Business';

const BusinessPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>비즈니스 커뮤니케이션 - 더와이컨설팅</title>
        <link rel="canonical" href="https://thewhy.kr/education/business" />
        <meta
          name="keywords"
          content="직장인매너,비즈니스매너,매너교육,업무매뉴얼제작,보고서작성방법"
        />
        <meta
          name="description"
          content="커뮤니케이션 교육, 더 나은 비즈니스 역량을 고민하는 고객사를 위한 프로그램 제시"
        />
      </Head>
      <PageTemplate>
        <Business />
      </PageTemplate>
    </>
  );
}

export default BusinessPage;