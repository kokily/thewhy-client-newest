import React from 'react';
import styled from 'styled-components';
import { media } from '../../libs/styles/utils';
import RemoveModal from '../common/RemoveModal';
import useModal from './hooks/useModal';
import Info from './read/Info';
import QuestionButton from './read/QuestionButton';
import ReadReply from './read/ReadReply';

// Styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FlexBox = styled.div`
  display: flex;
  width: 100%;
  max-width: 1110px;
  justify-content: center;
  margin-bottom: 1.5rem;

  ${media.large} {
    max-width: 760px;
  }

  ${media.medium} {
    max-width: 95%;
  }
`;

const Body = styled.div`
  display: flex;
  width: 100%;
  max-width: 600px;
  background: #f7f7f7;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 1rem;

  pre {
    font-size: 0.9rem;
    line-height: 1.6;
    white-space: pre-line;
    margin-top: 0;
    margin-bottom: 1rem;
    overflow: auto;
  }
`;

const ReplyBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  background: #f7f7f7;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 1rem;

  pre {
    font-size: 0.9rem;
    line-height: 1.6;
    white-space: pre-line;
    margin-top: 0;
    margin-bottom: 1rem;
    overflow: auto;
  }
`;

const Button = styled.button`
  font-weight: 600;
  background: white;
  color: #bdb219;
  padding: 0.3rem 0.6rem;
  border: 2px solid #bdb219;
  border-radius: 25px;
  box-shadow: 2px 2px 0 0 rgba(0, 0, 0, 0.1);
  transition: 0.12s;
  cursor: pointer;

  &:hover {
    background: #bdb219;
    color: white;
  }

  &:active {
    transform: translateY(2px);
    box-shadow: none;
  }
`;

interface Props {
  question: QuestionType;
  me: MeType | null;
  reply: string;
  toggle: boolean;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onToggle: () => void;
  onRemove: () => void;
  onAddReply: () => void;
  onRemoveReply: () => void;
  isEdit: () => void;
}

const ReadQuestion: React.FC<Props> = ({
  question,
  me,
  reply,
  toggle,
  onChange,
  onToggle,
  onRemove,
  onAddReply,
  onRemoveReply,
  isEdit,
}) => {
  const {
    modal,
    onRemoveClick,
    onConfirm,
    onCancel,
    replyModal,
    onRemoveReplyClick,
    onReplyConfirm,
    onReplyCancel,
  } = useModal({ onRemove, onRemoveReply });

  return (
    <Container>
      {me && (
        <FlexBox>
          <QuestionButton
            modal={modal}
            onRemoveClick={onRemoveClick}
            onConfirm={onConfirm}
            onCancel={onCancel}
            onRemoveReplyClick={onRemoveReplyClick}
            onToggle={onToggle}
            isReply={question.isReply}
          />
        </FlexBox>
      )}

      <FlexBox>
        <Info question={question} />
      </FlexBox>

      <FlexBox>
        <Body>
          <pre>{question.body}</pre>
        </Body>
      </FlexBox>

      <FlexBox>
        <Button onClick={isEdit}>문의 글 수정(Password)</Button>
      </FlexBox>

      {me && toggle && !question.isReply && (
        <FlexBox>
          <ReadReply
            reply={reply}
            question={question}
            onChange={onChange}
            onAddReply={onAddReply}
          />
        </FlexBox>
      )}

      {question.isReply && (
        <ReplyBox>
          <h4>답 글</h4>
          <pre>{question.reply.body}</pre>
        </ReplyBox>
      )}

      <RemoveModal
        visible={replyModal}
        onConfirm={onReplyConfirm}
        onCancel={onReplyCancel}
      />
    </Container>
  );
};

export default ReadQuestion;
