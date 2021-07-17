import React,{ MutableRefObject } from 'react';
import styled from 'styled-components';
import LocateMap from './locate/LocateMap';

// Styles
const Container = styled.div`
  display: flex;
  justify-content: center;
`;

interface Props {
  kakaoMap: MutableRefObject<HTMLDivElement>;
}

const Locate: React.FC<Props> = ({ kakaoMap }) => {
  return (
    <Container>
      <LocateMap ref={kakaoMap} />
    </Container>
  );
};

export default Locate;