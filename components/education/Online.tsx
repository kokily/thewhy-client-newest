import React from 'react';
import Communication from './common/Communication';

interface Props {}

const Online: React.FC<Props> = () => {
  const data = [
    {
      img: 'online01',
      list: [
        '줌 (ZOOM), 웹엑스 (Webex) 등 익히 알려진 실시간 형태의 온라인 교육이 가능합니다.',
      ],
    },
    {
      img: 'online02',
      list: ['고객사의 요구 사항에 따라 동영상 형태의 교육 프로그램을 개발, 운영합니다.'],
      end: true,
    },
  ];

  return (
    <Communication
      img="online.png"
      title="온라인(On-Line) 프로그램"
      body={
        '실시간 그리고 맞춤형 형태로 고객사가 원하는 교육 프로그램을 개발하고 진행 가능합니다\n언제 어디서든 장소의 제약 없이 우리의 행복한 성장을 원하는 곳에 더와이컨설팅이 온라인 교육을 진행합니다.'
      }
      data={data}
    />
  );
};

export default Online;