import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { MdKeyboardArrowRight } from 'react-icons/md';

// Styles
const Container = styled.div`
  flex: 0 0 50%;
  max-width: 50%;
  position: relative;
  width: 100%;
  padding-left: 12px;
  padding-right: 12px;

  h5 {
    font-size: 1rem;
    font-weight: 600;
    line-height: 18px;
    margin: 0 0 14px 0;
    margin-bottom: 0.25rem;
    color: #fff;
  }

  p {
    color: #777;
    margin-top: 0.6rem;
    margin-bottom: 0.6rem;
  }
`;

const LinkBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1rem;
  margin-right: -15px;
  margin-left: -15px;

  .pane {
    position: relative;
    width: 100%;
    padding-left: 15px;
    padding-right: 15px;
    flex: 0 0 50%;
    max-width: 50%;
    margin-bottom: 0;
    margin-top: 1rem;
  }
`;

const UL = styled.ul`
  margin-top: 0.5rem;
  list-style: none;
  padding-left: 0;
  padding-right: 0;

  li {
    position: relative;
    padding-left: 16px;
    margin-bottom: 0.4rem;
    color: #777;

    svg {
      position: absolute;
      top: 2px;
      left: 0px;
    }

    a {
      transition: 0.12s all;
    }

    a:hover {
      color: white;
      position: relative;
      left: 5px;
    }
  }
`;

interface Props {}

const FooterContentRight: React.FC<Props> = ({}) => {
  return (
    <Container>
      <h5>회사소개</h5>
      <p>더와이컨설팅은 행복한 삶을 꿈꾸는 "커뮤니케이션" 전문 교육 컨설팅 회사입니다.</p>
      <p>
        우리가 존재하는 이유는 커뮤니케이션을 통해 개인과 조직의 행복을 돕는 것입니다.
      </p>
      <p>우리의 비전은 대한민국의 직장인들이 모두 행복해 할 때까지,</p>
      <p>그래서 대한민국을 대표하는 커뮤니케이션 전문가가 되는 것입니다.</p>

      <LinkBox>
        <div className="pane">
          <h5>주요링크</h5>
          <UL>
            <li>
              <MdKeyboardArrowRight size={17} color="#0088cc" />
              <Link href="/question">
                <a>교육문의</a>
              </Link>
            </li>
            <li>
              <MdKeyboardArrowRight size={17} color="#0088cc" />
              <Link href="/education">
                <a>교육 프로그램</a>
              </Link>
            </li>
            <li>
              <MdKeyboardArrowRight size={17} color="#0088cc" />
              <Link href="/online">
                <a>온라인 프로그램</a>
              </Link>
            </li>
            <li>
              <MdKeyboardArrowRight size={17} color="#0088cc" />
              <Link href="/stories">
                <a>The Y 이야기</a>
              </Link>
            </li>
          </UL>
        </div>
      </LinkBox>
    </Container>
  );
};

export default FooterContentRight;
