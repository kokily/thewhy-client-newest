import React from 'react';
import styled from 'styled-components';
import { NavMenu } from '../../../../libs/menu';
import { media } from '../../../../libs/styles/utils';
import HeaderNavItem from './HeaderNavItem';

// Styles
const Container = styled.nav`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const UL = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 694.11px;
  list-style: none;

  ${media.medium} {
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
  }
`;

interface Props {}

const HeaderNavList: React.FC<Props> = () => {
  return (
    <Container>
      <UL className="menu">
        {NavMenu?.map((menu) => (
          <HeaderNavItem key={menu.id} menu={menu} />
        ))}
      </UL>
    </Container>
  );
};

export default HeaderNavList;
