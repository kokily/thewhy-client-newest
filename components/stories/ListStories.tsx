import React from 'react';
import Link from 'next/link';
import styled, { css } from 'styled-components';
import { media } from '../../libs/styles/utils';
import Search from '../common/Search';
import CardList from './list/CardList';
import useMedia from '../../libs/hooks/useMedia';

// Styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Contents = styled.div`
  width: 100%;

  ${media.large} {
    max-width: 760px;
  }
`;

const Button = styled.a`
  height: 40px;
  font-family: '윤고딕';
  font-size: 1rem;
  font-weight: 600;
  padding: 0.4rem 1rem;
  background: white;
  color: #db3603;
  border: 2px solid #db3603;
  border-radius: 14px;
  cursor: pointer;
  transition: 0.2s all;

  &:hover {
    background: #db3603;
    color: white;
  }
`;

const SearchBox = styled.div<{ small: boolean }>`
  display: flex;
  width: 100%;
  justify-content: space-between;

  ${(props) =>
    props.small &&
    css`
      justify-content: flex-end;
    `}
`;

interface Props {
  stories: StoryType[];
  search: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: (e: React.MouseEvent) => void;
  onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  me: MeType | null;
}

const ListStories: React.FC<Props> = ({
  stories,
  search,
  onChange,
  onSearch,
  onKeyPress,
  me,
}) => {
  const isSmall = useMedia('(max-width: 768px)');

  return (
    <Container>
      <Contents>
        <SearchBox small={isSmall}>
          {!isSmall && (
            <Link href="/stories/add">
              <Button>글 작성</Button>
            </Link>
          )}

          <Search
            mode="제목"
            search={search}
            onChange={onChange}
            onSearch={onSearch}
            onKeyPress={onKeyPress}
          />
        </SearchBox>

        <CardList stories={stories} me={me} />
      </Contents>
    </Container>
  );
};

export default ListStories;
