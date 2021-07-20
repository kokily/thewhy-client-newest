import React from 'react';
import styled from 'styled-components';
import { media } from '../../libs/styles/utils';

// Styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1110px;

  img {
    width: 100%;

    ${media.large} {
      max-width: 760px;
    }
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 3.5rem;
  max-width: 720px;

  ${media.medium} {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  h2 {
    font-family: 윤고딕330;
    font-size: 26px;
    font-weight: 600;
    color: #493586;
  }

  p {
    font-family: 윤고딕320;
    font-size: 20px;
    font-weight: 400;
    line-height: 1.4;
    color: #777;
    word-break: keep-all;
    margin: 0 0 20px;
    white-space: pre-wrap;
  }
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3.5rem;
  max-width: 720px;
  width: 100%;

  .row {
    display: flex;
    width: 100%;

    ${media.medium} {
      flex-direction: column;
      align-items: center;
      margin-bottom: 2rem;
    }

    .col {
      flex: 0 0 33.333333%;
      max-width: 33.333333%;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        max-width: 100px;
        height: auto;
      }
    }

    ul {
      flex: 0 0 66.666667%;
      max-width: 66.666667%;
      border-top: 2px solid rgb(73, 53, 134);
      font-family: 윤고딕320;
      font-size: 17px;
      color: #777;
      margin-top: 0;
      padding-top: 1.2rem;

      &.end {
        border-bottom: 2px solid rgb(73, 53, 134);
        padding-bottom: 1.2rem;
      }

      li {
        line-height: 1.6;
      }
    }
  }
`;

interface Props {}

const Communication: React.FC<Props> = () => {
  return (
    <Container>
      <img src="/images/education/online.png" alt="온라인 교육" />

      <Title>
        <h2>온라인(On-Line) 프로그램</h2>
        <p>
          실시간 그리고 맞춤형 형태로 고객사가 원하는 교육 프로그램을 개발하고 진행
          가능합니다.
          <br />
          언제 어디서든 장소의 제약 없이 우리의 행복한 성장을 원하는 곳에 더와이컨설팅이
          온라인 교육을 진행합니다.
        </p>
      </Title>

      <Contents>
        <div className="row">
          <div className="col">
            <img src="/images/education/online01.png" alt="Online Program" />
          </div>

          <ul>
            줌 (ZOOM), 웹엑스 (Webex) 등 익히 알려진 실시간 형태의
            <br />
            온라인 교육이 가능합니다.
          </ul>
        </div>

        <div className="row">
          <div className="col">
            <img
              src="/images/education/online02.png"
              alt="Online Program"
              style={{ maxWidth: '130px' }}
            />
          </div>

          <ul className="end">
            고객사의 요구 사항에 따라 동영상 형태의 교육 프로그램을
            <br />
            개발, 운영합니다.
          </ul>
        </div>
      </Contents>
    </Container>
  );
};

export default Communication;