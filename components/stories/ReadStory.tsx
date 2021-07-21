import React from 'react';
import styled from 'styled-components';
import { media } from '../../libs/styles/utils';
import Markdown from '../common/Markdown';
import useDayModal from './hooks/useDayModal';
import ReadButton from './read/ReadButton';

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

  img {
    width: 100%;
    margin-bottom: 1.2rem;
  }

  ${media.large} {
    max-width: 760px;
  }

  ${media.medium} {
    max-width: 95%;
  }
`;

const DateBox = styled.div`
  flex: 0 0 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  span {
    background: #f7f7f7;
    border-radius: 2px 2px 0 0;
    color: #0088cc;
    display: block;
    font-size: 18px;
    font-weight: 900;
    padding: 10px;

    &.month {
      display: block;
      background: #0088cc;
      border-radius: 0 0 2px 2px;
      color: #fff;
      font-size: 0.8em;
      line-height: 1.8;
      padding: 1px 10px;
      text-transform: uppercase;
    }
  }
`;

const TitleBox = styled.div`
  flex: 0 0 calc(100% - 60px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;

  .title h2 {
    font-size: 2rem;
    line-height: 42px;
    color: #1d4fd8;
    margin: 0;
    margin-bottom: 5px;
    letter-spacing: -0.05rem;
  }

  .tags {
    span {
      margin-right: 0.5rem;
      color: #1340bd;
      opacity: 0.5;
      transition: 0.2s;
      cursor: pointer;

      &:hover {
        opacity: 1;
        color: #4060b6;
      }
    }
  }
`;

interface Props {
  story: StoryType;
  me: MeType | null;
  onRemove: () => void;
  onUpdate: () => void;
}

const ReadStory: React.FC<Props> = ({ story, me, onRemove, onUpdate }) => {
  const { month, day, dayOfWeek, modal, onRemoveClick, onConfirm, onCancel } =
    useDayModal({ story, onRemove });

  return (
    <Container>
      <FlexBox>
        {story.thumbnail && <img src={story.thumbnail} alt={story.title} />}
      </FlexBox>

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
          <span className="day">
            {month}/{day}
          </span>
          <span className="month">{dayOfWeek}</span>
        </DateBox>

        <TitleBox>
          <div className="title">
            <h2>{story.title}</h2>
          </div>

          <div className="tags">
            {story.tags && story.tags.map((tag) => <span key={tag}>#{tag}</span>)}
          </div>
        </TitleBox>
      </FlexBox>

      <FlexBox>
        <Markdown markdown={story.body} />
      </FlexBox>
    </Container>
  );
};

export default ReadStory;
