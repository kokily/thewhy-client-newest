import React from 'react';
import styled from 'styled-components';
import { IoLocationOutline } from 'react-icons/io5';
import { FaPhone } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { BiTimeFive } from 'react-icons/bi';

// Styles
const Container = styled.div`
  flex: 0 0 50%;
  width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
  animation-delay: 200ms;
  animation-duration: 1s;
`;

const Content = styled.div`
  margin-bottom: 4rem;

  h4 {
    margin: 0.5rem 0 0 0;
    font-size: 1.4em;
    font-weight: 400;
    line-height: 27px;
  }

  ul {
    list-style: none;
    padding-left: 0;
    padding-right: 0;
  }

  li {
    position: relative;
    padding-top: 5px;
    padding-left: 36px;
    margin-bottom: 13px;
    line-height: 24px;
    vertical-align: middle;

    svg {
      position: absolute;
      left: 0;
      border-width: 1px;
      width: 25px;
      height: 25px;
      text-align: center;
      padding: 4px;
      font-size: 0.8em;
      border-style: solid;
      border-radius: 50%;
      color: #0088cc;
    }
  }
`;

interface Props {}

const Info: React.FC<Props> = () => {
  return (
    <Container>
      <Content>
        <h4>
          Contact <strong>US</strong>
        </h4>
        <ul>
          <li>
            <IoLocationOutline />
            <strong>주소: </strong>
            경기도 남양주시 다산중앙로19번길 25-23, 에프508호
          </li>

          <li>
            <FaPhone />
            <strong>전화: </strong>
            050-5055-7221
          </li>

          <li>
            <MdEmail />
            <strong>이메일: </strong>
            thewhy@thewhy.kr
          </li>
        </ul>
      </Content>

      <Content>
        <h4>
          Business <strong>Hours</strong>
        </h4>

        <ul>
          <li>
            <BiTimeFive />
            월요일 ~ 금요일: 10:00 ~ 19:00
          </li>

          <li>
            <BiTimeFive />
            토/일/공휴일: 휴무
          </li>
        </ul>
      </Content>
    </Container>
  );
};

export default Info;