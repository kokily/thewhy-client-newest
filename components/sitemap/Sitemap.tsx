import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { FaFolderOpen } from 'react-icons/fa';
import { BiFileBlank } from 'react-icons/bi';
import { media } from '../../libs/styles/utils';

// Styles
const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Contents = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 100%;
  max-width: 1110px;

  ${media.large} {
    max-width: 760px;
  }

  ${media.medium} {
    max-width: 95%;
    justify-content: center;
  }
`;

const MainMenu = styled.div`
  flex: 0 0 25%;
  max-width: 25%;

  display: flex;
  flex-direction: column;
  align-items: center;

  ${media.large} {
    flex: 0 0 33.33333%;
    max-width: 33.33333%;
  }

  ${media.medium} {
    flex: 0 0 50%;
    max-width: 47.5%;
    align-items: flex-start;
  }

  ${media.small} {
    flex: none;
    display: block;
    width: 100%;
    max-width: 95%;
  }

  .main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 15px;
    padding-bottom: 15px;

    .title {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      font-weight: bold;
      margin-bottom: 0.7rem;
      color: #350418;
    }

    svg {
      margin-right: 0.7rem;
    }

    .sub {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding-left: 0.5rem;
      margin-bottom: 0.6rem;
      color: #114cec;
      opacity: 0.7;
      transition: 0.1s;

      &:hover {
        color: #184bda;
        opacity: 1;
      }
    }
  }
`;

interface Props {
  menu: MenuType[];
}

const Sitemap: React.FC<Props> = ({ menu }) => {
  return (
    <Container>
      <Contents>
        {menu.map((item) => (
          <MainMenu key={item.id}>
            <div className="main">
              <div className="title">
                <FaFolderOpen />
                {item.title}
              </div>

              {item.items &&
                item.items.length > 0 &&
                item.items.map((file) => (
                  <div className="sub">
                    <BiFileBlank />
                    <Link href={file.subUrl}>
                      <a>{file.subTitle}</a>
                    </Link>
                  </div>
                ))}
            </div>
          </MainMenu>
        ))}
      </Contents>
    </Container>
  );
};

export default Sitemap;
