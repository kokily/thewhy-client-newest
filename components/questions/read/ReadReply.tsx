import React from 'react';
import styled from 'styled-components';
import Button from '../../common/Button';

// Styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  text-align: center;
`;

const ReplyBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;

  textarea {
    border-color: rgba(0, 0, 0, 0.09);
    border-radius: 8px;
    margin-bottom: 1rem;
    padding: 15px;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
`;

interface Props {
  reply: string;
  question: QuestionType;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onAddReply: () => void;
}

const ReadReply: React.FC<Props> = ({ reply, question, onChange, onAddReply }) => {
  return (
    <Container>
      <ReplyBox>
        <h4>답글 달기</h4>
        <textarea rows={8} name="reply" value={reply} onChange={onChange} />

        <ButtonBox>
          <Button onClick={onAddReply} submit>
            답글저장
          </Button>
        </ButtonBox>
      </ReplyBox>
    </Container>
  );
};

export default ReadReply;
