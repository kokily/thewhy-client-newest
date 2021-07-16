import React from 'react';
import styled from 'styled-components';
import Header from './Header';

// Styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 2000px;
`;

const Layout = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 1110px;
`;

const ChildBox = styled.main`
  display: block;
  width: 100%;
  margin-top: 208px;
`;

interface Props {}

const PageTemplate: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      <Layout>
        <Header />
        <ChildBox>{children}</ChildBox>
      </Layout>
    </Container>
  );
};

export default PageTemplate;
