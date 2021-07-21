import React from 'react';
import styled from 'styled-components';
import EditorFooter from '../common/editor/EditorFooter';
import EditorTitle from '../common/editor/EditorTitle';
import QuillEditor from '../common/editor/QuillEditor';

// Styles
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  animation: fadeIn 0.5s forwards;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const EditorBox = styled.div`
  min-width: 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Wrapper = styled.div`
  padding-top: 2rem;
  padding-left: 3rem;
  padding-right: 3rem;
`;

interface Props {
  edit: boolean;
  title: string;
  body: string;
  onChangeTitle: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeBody: (text: string) => void;
  onBack: () => void;
  onSubmit: (e: React.MouseEvent) => void;
}

const WriteNotice: React.FC<Props> = ({
  edit,
  title,
  body,
  onChangeTitle,
  onChangeBody,
  onBack,
  onSubmit,
}) => {
  return (
    <Container>
      <EditorBox>
        <Wrapper>
          <EditorTitle
            placeholder="제목을 입력하세요"
            onChange={onChangeTitle}
            value={title}
          />
          <QuillEditor edit={edit} QuillChange={onChangeBody} body={body} />
        </Wrapper>

        <EditorFooter onBack={onBack} onSubmit={onSubmit} />
      </EditorBox>
    </Container>
  );
};

export default WriteNotice;
