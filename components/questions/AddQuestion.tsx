import React from 'react';
import styled, { css } from 'styled-components';
import { AiOutlineUser } from 'react-icons/ai';
import { HiOutlineKey, HiOutlineMail } from 'react-icons/hi';
import { IoIosPhonePortrait } from 'react-icons/io';
import { MdSubtitles } from 'react-icons/md';
import { media } from '../../libs/styles/utils';
import Button from '../common/Button';

// Styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 1110px;

  ${media.large} {
    max-width: 760px;
  }

  ${media.medium} {
    max-width: 95%;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  border: 1px solid rgba(0, 0, 0, 0.06);
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  max-width: 600px;
  margin-bottom: 1rem;

  label {
    font-family: 'NanumGothic-Regular';
    font-size: 0.9rem;
    margin-bottom: 0.3rem;

    span {
      color: red;
    }
  }

  svg {
    position: absolute;
    top: 30px;
    left: 8px;
  }

  input {
    padding: 0.6rem;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    transition: 0.12s;
    padding-left: 40px;

    &:focus {
      outline: none;
      background: #fcfcfc;
      border: 1px solid #0c89d1;
    }
  }

  textarea {
    display: block;
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    outline: none;
    transition: border-color 0.15s ease-in-out;
    resize: vertical;
    padding: 0.5rem;
    font-size: 1em;
    font-weight: 400;
    color: #495057;
    &:focus {
      outline: none;
      background: #fcfcfc;
      border: 1px solid #0c89d1;
    }
  }
`;

const CheckBox = styled.div<{ agree: boolean }>`
  display: flex;
  justify-content: center;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  transition: 0.12s;

  input {
    margin-right: 0.5rem;
  }

  ${(props) =>
    props.agree &&
    css`
      label {
        font-weight: bold;
        color: #0276c3;
      }
    `}
`;

const Info = styled.div`
  display: flex;
  width: 100%;
  max-width: 600px;
  background: #f7f7f7;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 1rem;

  pre {
    font-size: 87.5%;
    line-height: 1.6;
    white-space: pre-line;
    margin-top: 0;
    margin-bottom: 1rem;
    overflow: auto;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

interface Props {
  name: string;
  password: string;
  phone: string;
  email: string;
  title: string;
  body: string;
  agree: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeBody: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeAgree: () => void;
  onSubmit: (e: React.MouseEvent) => void;
}

const AddQuestion: React.FC<Props> = ({
  name,
  password,
  phone,
  email,
  title,
  body,
  agree,
  onChange,
  onChangeBody,
  onChangeAgree,
  onSubmit,
}) => {
  return (
    <Container>
      <FlexBox>
        <Form>
          <InputGroup>
            <label>
              ?????? <span>*</span>
            </label>
            <AiOutlineUser size={20} color="#0c89d1" />
            <input type="text" name="name" value={name} onChange={onChange} required />
          </InputGroup>

          <InputGroup>
            <label>
              ???????????? <span>*</span>
            </label>
            <HiOutlineKey size={20} color="#0c89d1" />
            <input
              type="password"
              name="password"
              value={password}
              onChange={onChange}
              required
            />
          </InputGroup>

          <InputGroup>
            <label>?????????</label>
            <IoIosPhonePortrait size={20} color="#0c89d1" />
            <input type="text" name="phone" value={phone} onChange={onChange} />
          </InputGroup>

          <InputGroup>
            <label>?????????</label>
            <HiOutlineMail size={20} color="#0c89d1" />
            <input type="text" name="email" value={email} onChange={onChange} />
          </InputGroup>

          <InputGroup>
            <label>
              ?????? <span>*</span>
            </label>
            <MdSubtitles size={20} color="#0c89d1" />
            <input type="text" name="title" value={title} onChange={onChange} />
          </InputGroup>

          <InputGroup>
            <label>
              ?????? <span>*</span>
            </label>
            <textarea name="body" value={body} onChange={onChangeBody} rows={10} />
          </InputGroup>

          <CheckBox agree={agree}>
            <input
              type="checkbox"
              name="agree"
              checked={agree}
              onChange={onChangeAgree}
            />
            <label>?????? ????????? ???????????????.</label>
          </CheckBox>

          <Info>
            <pre>
              ????????????????????? ?????? ??????, ????????? ?????? ?????? ?????? ????????? ?????? ?????? ?????????
              ??????, ???????????? ????????????.
              <br />
              <br />
              1. ?????? ?????? ??? ?????? ??????
              <br />
              - ????????????: ??????, ?????????(??????), ?????????(??????), ?????? ?????? ??? ??????, ?????? ??????
              <br />
              - ????????????: ????????? ??????, ?????? ??????, ?????? ??????, ?????? ??????
              <br />
              <br />
              2. ?????? ??? ?????? ??????
              <br />- ????????????????????? ???????????? ?????? ??? ?????? ????????? ????????? ????????? ?????? ??????
              ????????? ???????????????.
            </pre>
          </Info>

          <ButtonBox>
            <Button onClick={onSubmit} submit>
              ????????????
            </Button>
          </ButtonBox>
        </Form>
      </FlexBox>
    </Container>
  );
};

export default AddQuestion;
