import React from 'react';
import styled from 'styled-components';
import { media } from '../../libs/styles/utils';

// Styles
const Container = styled.div`
  flex: 0 0 50%;
  width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
  font-family: 'Poppins', Arial, sans-serif;
  -webkit-animation-name: mask5Up;
  animation-name: mask5Up;
  animation-delay: 100ms;
  animation-duration: 1s;

  h2 {
    font-size: 2.3em;
    font-weight: 500;
    font-style: normal;
    margin: 0.5rem 0 0 0;
    color: #212529;
  }

  p {
    line-height: 26px;
    color: #777;
    margin-bottom: 1.5rem;
  }
`;

const Form = styled.form`
  margin-left: -5px;
  margin-right: -5px;

  .row {
    width: 100%;
    margin-bottom: 1.2rem;
    padding-left: 5px;
    padding-right: 5px;

    label {
      display: inline-block;
      font-size: 0.9em;
      font-weight: 300;
      margin-bottom: 0.5rem;
      color: #777;
    }

    input {
      display: block;
      width: 100%;
      height: auto;
      padding: 0.5rem;
      font-size: 1em;
      font-weight: 400;
      color: #495057;
      border: 1px solid #ced4da;
      border-radius: 0.25rem;
      outline: none;
      transition: border-color 0.15s ease-in-out;
      -webkit-appearance: none;

      &:after {
        content: '.';
        display: block;
        clear: both;
        visibility: hidden;
        line-height: 0;
        height: 0;
      }
    }

    textarea {
      display: block;
      width: 100%;
      border: 1px solid #ced4da;
      border-radius: 0.25rem;
      outline: none;
      transition: border-color 0.15s ease-in-out;
      resize: vertical;
      padding: 0.5rem;
      font-size: 1em;
      font-weight: 400;
      color: #495057;
    }
  }

  .sep {
    display: flex;
    justify-content: space-around;

    div {
      flex: 0 0 50%;
      max-width: 50%;
      padding-left: 2px;
      padding-right: 2px;
    }
  }
`;

const Button = styled.button`
  padding: 0.5rem 0.8rem;
  color: #0088cc;
  background-color: white;
  border: 2px solid #0088cc;
  border-radius: 25px;
  cursor: pointer;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out;

  &:hover {
    color: white;
    background-color: #0088cc;
  }
`;

interface Props {
  mail: {
    name: string;
    email: string;
    subject: string;
    body: string;
    onChange: (
      e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
    ) => void;
    onSubmit: (e: React.MouseEvent) => void;
  };
}

const SendMail: React.FC<Props> = ({ mail }) => {
  const { name, email, subject, body, onChange, onSubmit } = mail;

  return (
    <Container>
      <h2>메일 보내기</h2>
      <p>Email로 문의를 보내주세요~!</p>

      <Form>
        <div className="row sep">
          <div>
            <label>이름</label>
            <input type="text" name="name" value={name} onChange={onChange} required />
          </div>

          <div>
            <label>Email</label>
            <input type="text" name="email" value={email} onChange={onChange} required />
          </div>
        </div>
        <div className="row">
          <label>문서제목</label>
          <input
            type="text"
            name="subject"
            value={subject}
            onChange={onChange}
            required
          />
        </div>
        <div className="row">
          <label>문의 내용</label>
          <textarea rows={8} name="body" value={body} onChange={onChange} required />
        </div>

        <div className="row">
          <Button onClick={onSubmit}>전송하기</Button>
        </div>
      </Form>
    </Container>
  );
};

export default SendMail;