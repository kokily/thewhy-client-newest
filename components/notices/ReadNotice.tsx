import React from 'react';
import styled from 'styled-components';
import useDayModal from '../../libs/hooks/useDayModal';
import { media } from '../../libs/styles/utils';
import Markdown from '../common/Markdown';
import ReadButton from '../common/ReadButton';

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

  ${media.large} {
    max-width: 760px;
  }

  ${media.medium} {
    max-width: 95%;
  }
`;

const DateBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;

  h4 {
    color: #777;
  }
`;

interface Props {
  notice: NoticeType;
  me: MeType | null;
  onRemove: () => void;
  onUpdate: () => void;
}

const ReadNotice: React.FC<Props> = ({ notice, me, onRemove, onUpdate }) => {
  const { year, month, day, dayOfWeek, modal, onRemoveClick, onConfirm, onCancel } =
    useDayModal({ target: notice, onRemove });

  return (
    <Container>
      {me && (
        <ReadButton
          modal={modal}
          onRemoveClick={onRemoveClick}
          onConfirm={onConfirm}
          onCancel={onCancel}
          onUpdate={onUpdate}
        />
      )}
      <FlexBox>
        <DateBox>
          <h4>
            {year}년 {month}월 {day}일 ({dayOfWeek}요일) 작성
          </h4>
        </DateBox>
      </FlexBox>

      <FlexBox>
        <Markdown markdown={notice.body} />
      </FlexBox>
    </Container>
  );
};

export default ReadNotice;
