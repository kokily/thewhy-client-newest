import React from 'react';
import styled from 'styled-components';
import { media } from '../../../libs/styles/utils';

// Styles
const Container = styled.div`
  display: block;
  position: relative;
  width: 100%;
  padding: 5px;
  flex: 0 0 33.33333%;
  max-width: 33.33333%;

  ${media.medium} {
    flex: 1 1 50%;
    max-width: 47.5%;
  }

  ${media.small} {
    flex: none;
    max-width: 95%;
  }
`;

interface Props {
  story: StoryType;
}

const Card: React.FC<Props> = ({ story }) => {
  return (
    <Container>

    </Container>
  )
};

export default Card;