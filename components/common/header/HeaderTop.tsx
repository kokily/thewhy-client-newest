import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Image from 'next/image';
import HeaderTopLeft from './top/HeaderTopLeft';
import HeaderTopRight from './top/HeaderTopRight';
import { media } from '../../../libs/styles/utils';

// Styles
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1110px;
  border-bottom: 0.4px solid #bebebe;

  ${media.medium} {
    justify-content: center;
  }
`;

interface Props {}

const HeaderTop: React.FC<Props> = () => {
  return (
    <Container>
      <HeaderTopLeft />

      <Link href="/">
        <a>
          <Image src="/svg/Logo.svg" width={210} height={96} />
        </a>
      </Link>

      <HeaderTopRight />
    </Container>
  );
};

export default HeaderTop;
