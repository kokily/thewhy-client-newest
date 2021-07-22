import React from 'react';
import styled from 'styled-components';
import { media } from '../../libs/styles/utils';
import First from './common/First';
import Main from './common/Main';
import Second from './common/Second';
import Third from './common/Third';
import Title from './common/Title';

// Styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  font-family: '윤고딕310';
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1110px;

  ${media.large} {
    max-width: 760px;
  }

  ${media.medium} {
    max-width: 95%;
  }
`;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

interface Props {}

const Privacy: React.FC<Props> = ({}) => {
  return (
    <Container>
      <Contents>
        <Main />

        <Layout>
          <Title>1. 처리하는 개인정보 항목</Title>
          <First>더와이컨설팅은 최소한의 개인정보를 수집하여 처리하고 있습니다.</First>
          <Second>가. 교육 문의</Second>
          <Third>필수항목: 이름, 비밀번호</Third>
          <Third>선택항목: 이메일주소, 휴대폰 번호</Third>
          <First>더와이컨설팅은 다음과 같은 방법으로 개인정보를 수집합니다.</First>
          <Second>이용자의 입력방법</Second>
          <Title>2. 개인정보의 처리목적</Title>
          <First>
            더와이컨설팅은 이용자의 소중한 개인정보를 '교육문의 글에 대한 답변 및 교육
            내용 안내'의 목적으로만 이용하며 목적이 변경될 경우 사전에 이용자의 동의를
            구하도록 하겠습니다.
          </First>
          <Title>3. 개인정보의 처리 및 보유기간</Title>
          <First>
            더와이컨설팅은 이용자의 개인 정보를 목적 달성을 위한 기간 동안에만 제한적으로
            처리하고 있으며, 처리 목적이 달성되면 해당 이용자의 개인 정보의 경우는 별도로
            저장 및 파기하고 있습니다.
          </First>
          <First>
            교육 문의에 따른 개인정보는 3개월간 보관하며, 이후 해당 정보는 지체없이 파기
            됩니다.
          </First>
          <Title>4. 개인정보의 제공 및 위탁</Title>
          <First>
            더와이컨설팅은 원칙적으로 이용자의 동의없이 개인 정보를 외부에 제공하지
            않습니다.
          </First>
          <Title>5. 개인정보의 파기</Title>
          <First>text</First>
          <Title>6. 개인정보의 안전성 확보 조치</Title>
          <First>
            더와이컨설팅은 이용자의 개인 정보를 가장 소중한 가치로 여기고 개인 정보를
            처리함에 있어서 다음과 같은 노력을 다하고 있습니다.
          </First>
          <Second>가. 이용자의 개인정보를 암호화하고 있습니다.</Second>
          <Third>
            이용자의 개인 정보를 암호화된 통신구간을 이용하여 전송하고, 비밀번호 등
            중요정보는 암호화하여 보관하고 있습니다.
          </Third>
          <Second>
            나. 해킹이나 컴퓨터 바이러스로부터 보호하기 위해 노력하고 있습니다.
          </Second>
          <Third>
            해킹이나 컴퓨터 바이러스 등에 의해 이용자의 개인 정보가 유출되거나 훼손되는
            것을 막기 위해 지속적으로 확인·감시하고 있습니다.
          </Third>
          <Second>
            다. 소중한 개인정보에 접근할 수 있는 사람을 최소화하고 있습니다.
          </Second>
          <Second>
            라. 임직원에게 이요자의 개인 정보 보호에 대해 정기적인 교육을 실시하고
            있습니다.
          </Second>
          <Title>7. 개인정보 자동 수집 장치의 설치·운영 및 거부에 관한 사항</Title>
          <First>쿠키 관련 내용(후술)</First>

          <Title>8. 개인정보 보호책임자 등</Title>
          <First>
            홈페이지를 이용하시는 과정에서 개인정보보호 관련 문의, 불만, 조언이나 기타
            사항은 개인정보 보호책임자에게 연락 주시기 바랍니다.
          </First>
          <Second>개인정보 보호책임자</Second>
          <Third>책임자: 김현성</Third>
          <Third>전화: 000-0000-0000</Third>
          <Third>문의: thewhy@thewhy.kr</Third>
          <Second>
            개인정보가 침해되어 이에 대한 신고나 상담이 필요할 경우 아래 기관에 문의하셔서
            도움을 받으실 수 있습니다.
          </Second>
          <Third>
            개인정보침해 신고센터: (국번없이)118 <a href="//privacy.kisa.or.kr">링크</a>
          </Third>
          <Third>
            대검찰청 사이버수사과: (국번없이)1301 <span>cid@spo.go.kr</span>
          </Third>
          <Third>
            경찰청 사이버안전국: (국번없이)182
            <a href="//cyberbureau.police.go.kr">링크</a>
          </Third>
        </Layout>
      </Contents>
    </Container>
  );
};

export default Privacy;
