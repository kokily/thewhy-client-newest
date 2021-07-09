import React from 'react';
import styled, { css } from 'styled-components';
import HeaderTop from './header/HeaderTop';
import useHeaderScroll from './hooks/useHeaderScroll';

// Styles
const Container = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  display: flex;
  justify-content: center;
`;

const HeaderContainer = styled.header<{ move: number }>`
  display: flex;
  justify-content: center;
  width: 1110px;
  height: 128px;
  margin-bottom: 128px;
  transition: 0.3s;

  ${(props) =>
    props.move > 100 &&
    css`
      height: 70px;
    `}
`;

interface Props {}

const Header: React.FC<Props> = () => {
  const { move } = useHeaderScroll();

  return (
    <Container>
      <HeaderContainer move={move}>
        <HeaderTop />
      </HeaderContainer>
    </Container>
  );
};

export default Header;
