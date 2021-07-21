import React from 'react';
import Link from 'next/link';
import styled, { css } from 'styled-components';
import useMedia from '../../libs/hooks/useMedia';
import { media } from '../../libs/styles/utils';
import Search from '../common/Search';
import Notice from './list/Notice';
import Pagination from './list/Pagination';

// Styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Contents = styled.div`
  width: 100%;
  justify-content: center;

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
  notice: NoticeType[];
  lastPage: number;
  page: number;
  me: MeType | null;
  onRead: (id: string) => void;
  onWrite: () => void;
  search: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: (e: React.MouseEvent) => void;
  onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const ListNotices: React.FC<Props> = ({
  notice,
  lastPage,
  page,
  me,
  onRead,
  onWrite,
  search,
  onChange,
  onSearch,
  onKeyPress,
}) => {
  const isSmall = useMedia('(max-width: 768px)');

  return (
    <Container>
      <Contents>
        <SearchBox small={isSmall}>
          {!isSmall && me && (
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

        <Notice notice={notice} onRead={onRead} />

        <Pagination title={search} page={page} lastPage={lastPage} />
      </Contents>
    </Container>
  );
};

export default ListNotices;
