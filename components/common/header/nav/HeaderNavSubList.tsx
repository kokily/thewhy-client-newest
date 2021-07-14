import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { media } from '../../../../libs/styles/utils';

// Styles
const Container = styled.li`
  display: list-item;
  text-align: -webkit-match-parent;
  line-height: 24px;

  ${media.medium} {
    width: 100%;
  }

  a {
    display: block;
    width: 100%;
    color: #777;
    clear: both;
    text-align: inherit;
    white-space: nowrap;
    background: transparent;
    border: 0;
    font-size: 14px;
    font-weight: 400;
    padding: 6px 18px 6px 18px;
    text-transform: none;
    letter-spacing: -0.5px;
    border-bottom: 1px solid #f6f6f6;

    &:hover {
      background: #f6f6f6;
    }
  }
`;

interface Props {
  item: ItemType;
}

const HeaderNavSubList: React.FC<Props> = ({ item }) => {
  return (
    <Container>
      <Link href={item.subUrl}>
        <a>{item.subTitle}</a>
      </Link>
    </Container>
  );
};

export default HeaderNavSubList;
