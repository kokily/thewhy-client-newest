import React from 'react';
import styled, { css } from 'styled-components';
import { AiFillFolder, AiFillFolderOpen } from 'react-icons/ai';
import useAccordion from './hooks/useAccordion';

// Styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  width: 100%;
  border: 1px solid silver;
  border-radius: 8px;
  margin-bottom: 0.5rem;
`;

const Header = styled.div<{ open: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 10px;
  cursor: pointer;
  font-family: '윤고딕330';
  font-weight: 600;
  color: #032fc0;
  transition: 0.12s;
  user-select: none;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  ${(props) =>
    props.open &&
    css`
      background: #032fc0;
      color: white;
    `}

  span {
    svg {
      margin-right: 0.5rem;
    }
  }
`;

const ContentBox = styled.div`
  width: 100%;
  height: 0;
  overflow: hidden;
  transition: height 0.35s ease;
  margin: 0;
  padding: 0 8px;

  .contents {
    white-space: pre-line;
    padding: 4px 8px;
  }
`;

interface Props {
  title?: string | React.ReactNode;
  content?: string | React.ReactNode;
}

const Accordion: React.FC<Props> = ({ title, content }) => {
  const { isOpen, handleClick, parentRef, childRef } = useAccordion();

  return (
    <Container>
      <Header onClick={handleClick} open={isOpen}>
        {title}
        <span>
          {isOpen ? (
            <>
              <AiFillFolderOpen />
              닫기
            </>
          ) : (
            <>
              <AiFillFolder />
              열기
            </>
          )}
        </span>
      </Header>

      <ContentBox ref={parentRef}>
        <div className="contents" ref={childRef}>
          {content}
        </div>
      </ContentBox>
    </Container>
  );
};

export default Accordion;
