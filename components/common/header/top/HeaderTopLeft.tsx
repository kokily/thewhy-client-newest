import React from 'react';
import styled from 'styled-components';
import { media } from '../../../../libs/styles/utils';

// Styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;

  ${media.medium} {
    display: none;
  }

  .title {
    font-size: 12.6px;
    font-weight: 600;
    font-family: Poppins, Arial, sans-serif;
    color: #777;
    margin-bottom: 0.7rem;
  }
`;

const IconGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    margin-right: 0.25rem;
  }

  .icon {
    width: 28px;
    height: 28px;
  }

  .youtube {
    transition: 0.2s all;
    background-image: url('/svg/Youtube_off.svg');
    background-repeat: no-repeat;
    background-size: cover;

    &:hover {
      background-image: url('/svg/Youtube_on.svg');
    }
  }

  .naver {
    transition: 0.2s all;
    background-image: url('/svg/Naver_off.svg');
    background-repeat: no-repeat;
    background-size: cover;

    &:hover {
      background-image: url('/svg/Naver_on.svg');
    }
  }
`;

interface Props {}

const HeaderTopLeft: React.FC<Props> = () => {
  return (
    <Container>
      <div className="title">커뮤니케이션 전문 교육컨설팅</div>
      <IconGroup>
        <a href="/">
          <div className="icon youtube" />
        </a>
        <a href="/">
          <div className="icon naver" />
        </a>
      </IconGroup>
    </Container>
  );
};

export default HeaderTopLeft;
