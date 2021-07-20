import { NextPage } from 'next';
import Head from 'next/head';
import PageTemplate from '../../components/common/PageTemplate';
import Extended from '../../components/education/Extended';

const ExtendedPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>확장된 DISC 커뮤니케이션 - 더와이컨설팅</title>
        <link rel="canonical" href="https://thewhy.kr/education/extended" />
        <meta
          name="keywords"
          content="이디스크,디스크교육,고객성향,고객응대방법,소통,조직활성화,DISC"
        />
        <meta
          name="description"
          content="커뮤니케이션 교육, 확장된 DISC 진단을 통한 조직 성향 분석"
        />
      </Head>
      <PageTemplate>
        <Extended />
      </PageTemplate>
    </>
  );
};

export default ExtendedPage;
