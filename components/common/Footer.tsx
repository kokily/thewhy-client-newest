import React from 'react';
import styled from 'styled-components';
import FooterContent from './footer/FooterContent';
import FooterCopyright from './footer/FooterCopyright';

// Styles
const Container = styled.footer`
  display: block;
  background: #212529;
  width: 100%;
  border-top: 4px solid #212529;
  font-size: 0.9rem;
  padding: 0;
  clear: both;
  position: relative;
`;

interface Props {}

const Footer: React.FC<Props> = ({}) => {
  return (
    <Container>
      <FooterContent />
      <FooterCopyright />
    </Container>
  );
};

export default Footer;
