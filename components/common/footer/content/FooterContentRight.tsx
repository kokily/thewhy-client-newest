import React from 'react';
import styled from 'styled-components';

// Styles
const Container = styled.div`
  flex: 0 0 50%;
  max-width: 50%;
  position: relative;
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  background: #686868;
`;

interface Props {}

const FooterContentRight: React.FC<Props> = ({}) => {
  return <Container>FooterContentRight</Container>;
};

export default FooterContentRight;
