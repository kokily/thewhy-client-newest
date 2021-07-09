import React from 'react';
import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';
import useMedia from '../../../libs/hooks/useMedia';

// Styles
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Menu = styled.div`
  width: 43.313rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  font-family: Poppins, Arial, sans-serif;
  font-weight: 600;
  font-size: 13px;
  color: #5f5f5f;
  transition: 0.2s;

  &:hover {
    color: #0088cc;
  }
`;

const HamburgerWrapper = styled.div`
  display: flex;
`;

interface Props {}

const HeaderNav: React.FC<Props> = () => {
  const isSmall = useMedia('(max-width: 992px)');

  return (
    <Container>
      {isSmall ? (
        <HamburgerWrapper>
          <GiHamburgerMenu />
        </HamburgerWrapper>
      ) : (
        <Menu>
          <Item>회사소개</Item>
          <Item>교육 프로그램</Item>
          <Item>THE Y 이야기</Item>
          <Item>커뮤니티</Item>
        </Menu>
      )}
    </Container>
  );
};

export default HeaderNav;
