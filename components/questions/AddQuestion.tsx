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
              이름 <span>*</span>
            </label>
            <AiOutlineUser size={20} color="#0c89d1" />
            <input type="text" name="name" value={name} onChange={onChange} required />
          </InputGroup>

          <InputGroup>
            <label>
              비밀번호 <span>*</span>
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
            <label>연락처</label>
            <IoIosPhonePortrait size={20} color="#0c89d1" />
            <input type="text" name="phone" value={phone} onChange={onChange} />
          </InputGroup>

          <InputGroup>
            <label>이메일</label>
            <HiOutlineMail size={20} color="#0c89d1" />
            <input type="text" name="email" value={email} onChange={onChange} />
          </InputGroup>

          <InputGroup>
            <label>
              제목 <span>*</span>
            </label>
            <MdSubtitles size={20} color="#0c89d1" />
            <input type="text" name="title" value={title} onChange={onChange} />
          </InputGroup>

          <InputGroup>
            <label>
              본문 <span>*</span>
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
            <label>아래 정보에 동의합니다.</label>
          </CheckBox>

          <Info>
            <pre>
              더와이컨설팅은 교육 문의, 서비스 신청 등을 위해 아래와 같이 개인 정보를
              수집, 활용하고 있습니다.
              <br />
              <br />
              1. 수집 항목 및 활용 목적
              <br />
              - 수집항목: 이름, 연락처(선택), 이메일(선택), 교육 주제 및 내용, 교육 장소
              <br />
              - 활용목적: 서비스 제공, 계약 이행, 요금 결제, 고객 관리
              <br />
              <br />
              2. 보유 및 활용 기간
              <br />- 더와이컨설팅은 개인정보 수집 및 활용 목적이 달성된 후에는 즉시 해당
              정보를 파기합니다.
            </pre>
          </Info>

          <ButtonBox>
            <Button onClick={onSubmit} submit>
              전송하기
            </Button>
          </ButtonBox>
        </Form>
      </FlexBox>
    </Container>
  );
};

export default AddQuestion;
