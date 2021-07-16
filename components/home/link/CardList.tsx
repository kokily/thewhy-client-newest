import React from 'react';
import styled from 'styled-components';
import { media } from '../../../libs/styles/utils';
import Card from './Card';

// Styles
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;

  ${media.large} {
    max-width: 760px;
  }

  ${media.medium} {
    max-width: 100%;
    justify-content: center;
  }
`;

interface Props {
  data: MainLinkType[];
}

const CardList: React.FC<Props> = ({ data }) => {
  return (
    <Container>
      {data.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </Container>
  );
};

export default CardList;
