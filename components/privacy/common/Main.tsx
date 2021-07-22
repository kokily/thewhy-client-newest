import React from 'react';
import styled from 'styled-components';

// Styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  .title {
    display: flex;
    max-width: 920px;
    font-size: 17px;
    color: #777;
    word-break: keep-all;
  }

  .sub {
    display: flex;
    font-size: 14px;
    color: #777;
    word-break: keep-all;
  }
`;

interface Props {}

const Main: React.FC<Props> = ({}) => {
  return (
    <Container>
      <p className="title">
        더와이 컨설팅은 이용자의 '동의를 기반으로 개인정보를 수집·이용 및 제공하고 있으며,
        이용자의 권리(개인정보 자기 결정권)를 적극적으로 보장'하며, 대한민국의
        개인정보보호 규정 및 가이드라인을 준수하고 있습니다.
      </p>

      <p className="sub">
        본 개인정보처리방침은 더와이컴퍼니 홈페이지 내 '교육문의'서비스 이용을 하고자 하는
        이용자(이하 '이용자')에 적용됩니다.
      </p>
    </Container>
  );
};

export default Main;
