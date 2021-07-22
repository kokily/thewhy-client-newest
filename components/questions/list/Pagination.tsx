import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

// Styles
const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Contents = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    font-weight: 600;
    margin-right: 1rem;
    padding: 0.3rem 0.5rem;
    background: #0db9cf;
    color: white;
    border: 1.4px solid #0db9cf;
    border-radius: 8px;

    &.disabled {
      color: #999;
      border: 1.4px solid #999;
      background: none;
      cursor: not-allowed;

      a {
        pointer-events: none;
        cursor: not-allowed;
      }
    }
  }
`;

interface Props {
  page: number;
  title: string;
  lastPage: number;
}

const Pagination: React.FC<Props> = ({ page, title, lastPage }) => {
  return (
    <Container>
      <Contents>
        <li className={`${(page === 1 || !page) && 'disabled'}`}>
          <Link
            href={`/question?page=${page === 1 ? undefined : page - 1}&title=${
              title !== '' ? '' : title
            }`}
          >
            <a>이전 페이지</a>
          </Link>
        </li>
        <li className="active">
          <a>{page} 페이지</a>
        </li>
        <li className={`${page === lastPage && 'disabled'}`}>
          <Link
            href={`/question?page=${page === lastPage ? undefined : page + 1}&title=${
              title !== '' ? '' : title
            }`}
          >
            <a>다음 페이지</a>
          </Link>
        </li>
      </Contents>
    </Container>
  );
};

export default Pagination;
