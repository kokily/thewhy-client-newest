import React from 'react';
import styled from 'styled-components';
import { media } from '../../libs/styles/utils';
import SendMail from './SendMail';
import Info from './Info';

// Styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 100%;
  }

  ${media.large} {
    img {
      max-width: 760px;
    }
  }
`;

const Contents = styled.div`
  display: flex;
  width: 100%;
  margin-top: 3.5rem;

  ${media.large} {
    max-width: 760px;
  }

  ${media.medium} {
    display: block;
    width: 100%;
  }
`;

interface Props {
  mail: {
    name: string;
    email: string;
    subject: string;
    body: string;
    onChange: (
      e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
    ) => void;
    onSubmit: (e: React.MouseEvent) => void;
  };
}

const Contact: React.FC<Props> = ({ mail }) => {
  return (
    <Container>
      <img src="/images/about/about.png" alt="Contact us" />

      <Contents>
        <SendMail mail={mail} />
        <Info />
      </Contents>
    </Container>
  );
};

export default Contact;