import React from 'react';
import styled from 'styled-components';
import { media } from '../../libs/styles/utils';
import Accordion from './Accordion';

// Styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Contents = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 1110px;

  ${media.large} {
    max-width: 760px;
  }

  ${media.medium} {
    max-width: 95%;
  }
`;

const FaqBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 650px;
`;

interface Props {
  data: FaqType[];
}

const Faq: React.FC<Props> = ({ data }) => {
  return (
    <Container>
      <Contents>
        <FaqBox>
          {data.map((faq) => (
            <Accordion key={faq.title} title={faq.title} content={faq.content} />
          ))}
        </FaqBox>
      </Contents>
    </Container>
  );
};

export default Faq;
