import React from 'react';
import styled from 'styled-components';
import Card from './Card';

// Styles
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
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
