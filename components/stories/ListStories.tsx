import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { media } from '../../libs/styles/utils';
import Search from '../common/Search';
import CardList from './list/CardList';

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

const SearchBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
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
  return (
    <Container>
      <Contents>
        <SearchBox>
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