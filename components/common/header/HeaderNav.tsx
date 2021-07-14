import React from 'react';
import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';
import useMedia from '../../../libs/hooks/useMedia';
import HeaderNavList from './nav/HeaderNavList';
import { media } from '../../../libs/styles/utils';

// Styles
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  ${media.xsmall} {
    width: 100%;
  }
`;

const HamburgerWrapper = styled.div`
  display: block;
  width: 768px;

  ${media.xsmall} {
    width: 100%;
  }

  .wrapper {
    position: relative;
    margin-top: 20px;
    height: 60px;

    svg {
      position: absolute;
      right: 30px;
      background: #6799ff;
      color: white;
      padding: 5px;
      border-radius: 3px;
    }
  }
`;

interface Props {}

const HeaderNav: React.FC<Props> = () => {
  const isSmall = useMedia('(max-width: 992px)');

  return (
    <Container>
      {isSmall ? (
        <HamburgerWrapper>
          <div className="wrapper">
            <GiHamburgerMenu size={30} />
          </div>
          <HeaderNavList />
        </HamburgerWrapper>
      ) : (
        <HeaderNavList />
      )}
    </Container>
  );
};

export default HeaderNav;
