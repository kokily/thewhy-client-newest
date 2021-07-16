import React from 'react';
import styled from 'styled-components';
import CardList from './link/CardList';

// Styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;

  h2 {
    font-family: '윤고딕', sans-serif;
    font-size: 31px;
    font-weight: 300;
    line-height: 42px;
    color: #463884;
    margin: 0;
    margin-bottom: 0.5rem;
  }

  .lead {
    word-break: keep-all;
    font-family: '윤고딕';
    font-size: 24px;
    font-weight: 300;
    letter-spacing: -0.05rem;
    color: #808080;
    margin: 0;
  }
`;

interface Props {
  data: MainLinkType[];
}

const HomeLink: React.FC<Props> = ({ data }) => {
  return (
    <Container>
      <Title>
        <h2>교육 프로그램</h2>
        <p className="lead">더와이 컨설팅에서 진행하는 맞춤화된 교육 프로그램입니다.</p>
      </Title>

      <CardList data={data} />
    </Container>
  );
};

export default HomeLink;
