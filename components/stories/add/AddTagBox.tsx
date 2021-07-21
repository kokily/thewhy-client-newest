import React from 'react';
import styled from 'styled-components';
import TagsList from './TagsList';

// Styles
const Container = styled.div`
  height: 4rem;
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 1.125rem;
  font-weight: bold;
  padding-left: 1rem;
  padding-right: 1rem;
  word-break: keep-all;
  p {
    margin-right: 1.3rem;
  }
`;

const TagForm = styled.form`
  background: none;
  input {
    flex: 1;
    border: none;
    outline: none;
    padding: 0.5rem;
    font-size: 1rem;
    background: none;
    &::placeholder {
      color: #777;
    }
  }
  button {
    color: #3db7cc;
    border: 1px solid #3db7cc;
    border-radius: 8px;
    background: none;
    padding: 0.3rem 0.5rem;
    font-weight: bold;
    cursor: pointer;
    transition: 0.2s all;
    &:hover {
      background: #58aebd;
      color: white;
      border: 1px solid #88c0ca;
    }
    &:active {
      transform: translateY(2px);
    }
  }
`;

interface Props {
  input: string;
  onSubmit: (e: React.ChangeEvent<HTMLFormElement>) => void;
  onChangeText: (e: React.ChangeEvent<HTMLInputElement>) => void;
  localTags: string[];
  removeTag: (tag: string) => void;
}

const AddTagBox: React.FC<Props> = ({
  input,
  onSubmit,
  onChangeText,
  localTags,
  removeTag,
}) => {
  return (
    <Container>
      <p>태그 ☞</p>

      <TagForm onSubmit={onSubmit}>
        <input placeholder="엔터로 입력!" value={input} onChange={onChangeText} />
        <button type="submit">추 가</button>
      </TagForm>

      <TagsList tags={localTags} onRemove={removeTag} />
    </Container>
  );
};

export default AddTagBox;
