import React from 'react';
import styled from 'styled-components';
import { BrowserView, MobileView } from 'react-device-detect';
import { media } from '../../libs/styles/utils';
import BrowserContent from './about/BrowserContent';
import MobileContent from './about/MobileContent';

// Styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 100%;
  }

  ${media.large} {
    img {
      max-width: 760px;
    }
  }
`;

const Contents = styled.div`
  display: flex;
  align-items: center;
  margin-top: 3.5rem;

  ${media.large} {
    max-width: 760px;
  }

  ${media.medium} {
    max-width: 760px;
    width: 100%;
    padding-left: 0.5rem;
    padding-right: 0.5rem;

    .text {
      flex: none !important;
      width: 100%;
    }

    .image {
      display: none;
    }
  }

  .text {
    flex: 0 0 60%;

    h2 {
      font-family: '윤고딕';
      font-size: 31px;
      font-weight: 600;
      font-style: normal;
      color: #463884;
      -webkit-animation-name: maskUp;
      animation-name: maskUp;
      animation-delay: 100ms;
      animation-duration: 1s;
    }
  }

  .iamge {
    flex: 0 0 40%;
    height: auto;
  }

  @-webkit-keyframes maskUp {
    from {
      transform: translate(0, 100%);
    }
    to {
      transform: translate(0, 0);
    }
  }

  @keyframes maskUp {
    from {
      transform: translate(0, 100%);
    }
    to {
      transform: translate(0, 0);
    }
  }
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3.5rem;

  h4 {
    font-family: 윤고딕, sans-serif;
    font-size: 31px;
    font-weight: 600;
    color: rgb(70, 56, 132);

    &:after {
      content: '';
      display: block;
      width: 120px;
      border-bottom: 3px solid rgb(51, 154, 240);
      margin: 20px auto;
    }
  }
`;

interface Props {}

const About: React.FC<Props> = () => {
  return (
    <Container>
      <img src="/images/about/about.png" alt="더와이컨설팅 소개" />

      <Contents>
        <div className="text">
          <h2>Why The Y</h2>

          <BrowserView>
            <BrowserContent />
          </BrowserView>

          <MobileView>
            <MobileContent />
          </MobileView>
        </div>

        <div className="image">
          <img src="/images/about/about01.png" alt="더와이컨설팅 소개" />
        </div>
      </Contents>

      <Bottom>
        <h4>더와이컨설팅이 가는 길</h4>
        <img src="/images/about/about02.png" alt="더와이컨설팅 소개" />
      </Bottom>
    </Container>
  );
};

export default About;