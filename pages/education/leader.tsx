import { NextPage } from 'next';
import Head from 'next/head'
import PageTemplate from '../../components/common/PageTemplate';
import Leader from '../../components/education/Leader';

const LeaderPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>리더 커뮤니케이션 - 더와이컨설팅</title>
        <link rel="canonical" href="https://thewhy.kr/education/leader" />
        <meta
          name="keywords"
          content="리더의말하기,리더역량,리더코칭,리더교육,갈등관리"
        />
        <meta
          name="description"
          content="커뮤니케이션 교육, 조직의 성과, 효율적인 경영을 위한 리더의 훈련 프로그램 제시"
        />
      </Head>
      <PageTemplate>
        <Leader />
      </PageTemplate>
    </>
  );
}

export default LeaderPage;
