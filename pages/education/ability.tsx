import { NextPage } from "next";
import Head from 'next/head';
import PageTemplate from "../../components/common/PageTemplate";
import Ability from "../../components/education/Ability";

const AbilityPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>직무 역량강화 - 더와이컨설팅</title>
        <link rel="canonical" href="https://thewhy.kr/education/ability" />
        <meta
          name="keywords"
          content="성과관리,직무분석,미션,비전,핵심가치,KPI,직무역량,성과목표"
        />
        <meta
          name="description"
          content="직무역량 강화, 직무분석을 통해 체계적인 교육훈련 프로그램 도출 및 제시"
        />
      </Head>
      <PageTemplate>
        <Ability />
      </PageTemplate>
    </>
  );
}

export default AbilityPage;