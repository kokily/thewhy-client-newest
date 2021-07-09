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
`;

const ChildBox = styled.main`
  margin-top: 11.813rem;
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
