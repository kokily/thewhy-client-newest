import React from 'react';
import styled from 'styled-components';
import { media } from '../../../libs/styles/utils';

// Styles
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;

  ${media.large} {
    max-width: 760px;
  }

  ${media.medium} {
    max-width: 100%;
    justify-content: center;
  }
`;

interface Props {
  stories: StoryType[];
  me: MeType | null;
}

const CardList: React.FC<Props> = ({ stories }) => {
  return (
    <Container>
      {stories && stories.length > 0 ? (
        <>
          {stories.map((story) => (
            <div id={story.id}>{story.title}</div>
          ))}
        </>
      ) : (
        <div className="space">아직 작성된 스토리가 없습니다.</div>
      )}
    </Container>
  );
};

export default CardList;