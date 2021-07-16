import React from 'react';
import styled from 'styled-components';
import { ImLocation } from 'react-icons/im';
import { AiOutlineMail } from 'react-icons/ai';

// Styles
const Container = styled.div`
  flex: 0 0 25%;
  max-width: 25%;
  position: relative;
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;

  h5 {
    font-size: 1rem;
    font-weight: 600;
    color: #fff;
    letter-spacing: -0.02rem;
    line-height: 18px;
    margin: 0 0 14px 0;
    margin-bottom: 1rem;
    -webkit-font-smoothing: antialiased;
  }

  p {
    &.number {
      font-size: 29px;
      font-weight: 700;
      line-height: 26px;
      margin: 0 0 20px;
      color: #fff;
    }

    color: #777;
    margin: 0 0 10px;
  }
`;

const UL = styled.ul`
  list-style: none;
  margin-top: 0;
  margin-bottom: 1rem;
  padding-left: 0;
  padding-right: 0;

  li {
    position: relative;
    line-height: 24px;
    margin-bottom: 0.25rem !important;
    padding-top: 5px;
    padding-left: 20px;

    svg {
      position: absolute;
      top: 10px;
      left: -2px;
    }

    p {
      word-break: keep-all;
    }
  }
`;

const IconGroup = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  a {
    margin-right: 0.25rem;
  }

  .icon {
    width: 36px;
    height: 36px;
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

const FooterContentLeft: React.FC<Props> = ({}) => {
  return (
    <Container>
      <h5>Contact Us</h5>
      <p className="number">050-5055-7221</p>
      <p>Tel: 050-5055-7221</p>
      <p>Fax: 050-4386-7221</p>

      <UL>
        <li>
          <ImLocation size={16} color="#0088cc" />
          <p>
            경기도 남양주시 다산중앙로19번길
            <br />
            25-23, 에프508호
            <br />
            (다산동, 다산진건블루웨일
            <br />
            지식산업센터 2차)
          </p>
        </li>

        <li>
          <AiOutlineMail size={16} color="#0088cc" />
          <p>thewhy@thewhy.kr</p>
        </li>
      </UL>

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

export default FooterContentLeft;
