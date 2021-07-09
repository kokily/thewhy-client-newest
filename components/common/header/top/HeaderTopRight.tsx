import React from 'react';
import styled from 'styled-components';
import { FaWhatsapp } from 'react-icons/fa';
import { media } from '../../../../libs/styles/utils';

// Styles
const Container = styled.div`
  display: flex;
  align-items: center;

  ${media.medium} {
    display: none;
  }

  p {
    font-size: 13px;
    font-family: helvetica serif, sans-seif;
    font-weight: 600;
    color: #777;
    margin-right: 1rem;
  }
`;

interface Props {}

const HeaderTopRight: React.FC<Props> = () => {
  return (
    <Container>
      <p>
        050-5055-7221
        <br />
        thewhy@thewhy.kr
      </p>
      <FaWhatsapp size={32} color="#463884" />
    </Container>
  );
};

export default HeaderTopRight;
