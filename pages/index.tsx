import { NextPage } from 'next';
import Head from 'next/head';
import PageTemplate from '../components/common/PageTemplate';
import HomeImage from '../components/home/HomeImage';
import HomeLink from '../components/home/HomeLink';

const IndexPage: NextPage = () => {
  const slideData = ['/images/index/main.png'];
  const linkData = [
    {
      id: 1,
      url: '/education',
      img: '/images/index/main01.png',
      title: '서비스 커뮤니케이션',
      sub: '서비스 현장에서 역량 향상을 위한 커뮤니케이션 프로그램',
    },
    {
      id: 2,
      url: '/education/business',
      img: '/images/index/main02.png',
      title: '비즈니스 커뮤니케이션',
      sub: '비즈니스 현장에서 역량 향상을 위한 커뮤니케이션 프로그램',
    },
    {
      id: 3,
      url: '/education/leader',
      img: '/images/index/main03.png',
      title: '리더 커뮤니케이션',
      sub: '조직의 성과와 효율적인 경영을 위한 리더의 커뮤니케이션 훈련 프로그램',
    },
    {
      id: 4,
      url: '/education/extended',
      img: '/images/index/main04.png',
      title: 'Extended-DISC 커뮤니케이션',
      sub: '개인, 팀, 조직의 소통 능력 활성화와 교육훈련을 위한 행동성향 분석 프로그램',
    },
    {
      id: 5,
      url: '/education/ability',
      img: '/images/index/main05.png',
      title: '직무역량 강화 프로그램',
      sub: '직무분석을 기반으로 직무역량 강화를 위한 교육훈련 프로그램',
    },
    {
      id: 6,
      url: '/education/online',
      img: '/images/index/main06.png',
      title: '온라인(On-Line) 프로그램',
      sub: '실시간 또는 동영상 형태의 온라인 프로그램',
    },
  ];

  return (
    <>
      <Head>
        <meta
          name="keywords"
          content="커뮤니케이션,서비스,온라인교육,동영상교육,리더교육,더와이,직무역량교육,성과관리,김영화강사,교육컨설팅"
        />
        <link rel="canonical" href="https://thewhy.kr" />
      </Head>
      <PageTemplate>
        <HomeImage data={slideData} />
        <HomeLink data={linkData} />
      </PageTemplate>
    </>
  );
};

export default IndexPage;
