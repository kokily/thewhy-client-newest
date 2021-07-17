import React, { forwardRef, Ref } from 'react';
import styled from 'styled-components';
import { media } from '../../../libs/styles/utils';

// Styles
const Container = styled.div`
  width: 100%;
  height: 600px;

  ${media.large} {
    max-width: 760px;
  }

  ${media.small} {
    max-width: 100%;
  }

  .map {
    width: 100%;
    height: 100%;
  }
`;

interface Props {
  ref: Ref<HTMLDivElement>;
}

const LocateMap: React.FC<Props> = forwardRef((_, ref) => {
  return (
    <Container>
      <div className="map" ref={ref} />
    </Container>
  );
})

export default LocateMap;