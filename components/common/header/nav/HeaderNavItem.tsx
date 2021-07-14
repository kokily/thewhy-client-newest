import React from 'react';
import Link from 'next/link';
import styled, { css } from 'styled-components';
import { IoIosArrowDown } from 'react-icons/io';
import HeaderNavSubList from './HeaderNavSubList';
import useHeaderNav from '../../hooks/useHeaderNav';
import { media } from '../../../../libs/styles/utils';
import useMedia from '../../../../libs/hooks/useMedia';

// Styles
const Container = styled.li`
  display: block;
  position: relative;
  color: #505050;
  padding: 10px;
  font-size: 13px;
  font-weight: 700;
  line-height: 30px;
  cursor: pointer;
  transition: 0.12s all;

  ${media.medium} {
    border-bottom: 1px solid #f6f6f6;
    min-height: 50px;
  }
`;

const Title = styled.div`
  display: flex;
  padding-right: 50px;

  a {
    cursor: pointer;
    ${media.medium} {
      width: 100%;
      clear: both;
    }
  }

  a:hover,
  a:hover::after {
    color: #0088cc;
  }

  svg {
    color: #0088cc;
    height: 30px;
  }
`;

const SubMenu = styled.ul<{ visible: boolean }>`
  display: none;
  list-style: none;
  transition: 1.2s;

  ${(props) =>
    props.visible &&
    css`
      display: block;
      position: absolute;
      float: left;
      min-width: 200px;
      padding: 5px 0;
      margin: 0;
      top: 60px;
      left: 0px;
      text-align: left;
      box-shadow: 0 15px 30px -5px rgb(0 0 0 / 7%);
      font-size: 13px;
      color: #212529;
      transform: translateX(-25%);

      ${media.medium} {
        position: static;
        max-width: 768px;
        width: 100%;
        transform: none;
        float: none;
        top: 100%;
        padding: 0;
        margin: 0;
        margin-left: 5px;
        margin-top: 10px;

        li {
          min-height: 42px;
          animation: 1.2s visibleDown;
        }

        @keyframes visibleDown {
          0% {
            height: 0;
          }
          100% {
            height: 100%;
          }
        }
      }
    `}
`;

interface Props {
  menu: MenuType;
}

const HeaderNavItem: React.FC<Props> = ({ menu }) => {
  const { home, edu, commu, toggleHome, toggleEdu, toggleCommu, offAll, ref } =
    useHeaderNav();
  const isSmall = useMedia('(max-width: 992px)');

  return (
    <Container
      ref={ref}
      onClick={
        menu.url === '/about'
          ? toggleHome
          : menu.url === '/education'
          ? toggleEdu
          : toggleCommu
      }
    >
      {menu.items ? (
        <>
          {isSmall ? (
            <>
              <Title>
                <a>{menu.title}</a>
                <IoIosArrowDown size={15} />
              </Title>
              <SubMenu
                visible={
                  menu.url === '/about' ? home : menu.url === '/education' ? edu : commu
                }
              >
                {menu.items.map((item) => (
                  <HeaderNavSubList key={item.id} item={item} />
                ))}
              </SubMenu>
            </>
          ) : (
            <>
              <a
                onMouseOver={
                  menu.url === '/about'
                    ? toggleHome
                    : menu.url === '/education'
                    ? toggleEdu
                    : toggleCommu
                }
                onClick={offAll}
              >
                {menu.title}
              </a>
              <SubMenu
                visible={
                  menu.url === '/about' ? home : menu.url === '/education' ? edu : commu
                }
              >
                {menu.items.map((item) => (
                  <HeaderNavSubList key={item.id} item={item} />
                ))}
              </SubMenu>
            </>
          )}
        </>
      ) : (
        <Link href={menu.url}>
          <a>{menu.title}</a>
        </Link>
      )}
    </Container>
  );
};

export default HeaderNavItem;
