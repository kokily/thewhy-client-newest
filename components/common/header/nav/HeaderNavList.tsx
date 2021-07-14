import React from 'react';
import styled, { css } from 'styled-components';
import { NavMenu } from '../../../../libs/menu';
import { media } from '../../../../libs/styles/utils';
import HeaderNavItem from './HeaderNavItem';

// Styles
const Container = styled.nav`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const UL = styled.ul<Props>`
  display: flex;
  justify-content: space-between;
  width: 694.11px;
  list-style: none;

  ${media.medium} {
    display: none;
    justify-content: flex-start;
    flex-direction: column;
    justify-content: center;
    width: 100%;

    ${(props) =>
      props.toggle &&
      css`
        display: flex;
      `}
  }
`;

interface Props {
  toggle?: boolean;
}

const HeaderNavList: React.FC<Props> = ({ toggle }) => {
  return (
    <Container>
      <UL className="menu" toggle={toggle}>
        {NavMenu?.map((menu) => (
          <HeaderNavItem key={menu.id} menu={menu} />
        ))}
      </UL>
    </Container>
  );
};

export default HeaderNavList;
