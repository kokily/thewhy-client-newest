import React from 'react';
import styled from 'styled-components';

// Styles
const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2.5rem;
`;

const AuthBox = styled.div`
  width: 100%;
  max-width: 470px;

  h2 {
    font-weight: 500;
  }
`;

const InputBox = styled.div`
  label {
    font-size: 14px;
    color: #212529;
  }

  span {
    color: #ff5b5b;
  }

  input {
    display: block;
    width: 100%;
    height: calc(1.5em + 1rem + 2px);
    font-size: 1.2em;
    padding: 0.5rem 1rem;
    border-radius: 0.3rem;
    color: #495057;
    -webkit-appearance: none;
    margin-top: 1rem;
    border: 1px solid rgba(0, 0, 0, 0.09);
  }
`;

const ButtonBox = styled.div`
  margin-top: 1rem;

  button {
    width: 100%;
    font-size: 1em;
    font-weight: 700;
    padding: 0.8rem 1.5rem;
    color: white;
    background: #212529;
    border: 1px solid #212529;
    cursor: pointer;

    &:active {
      transform: translateZ(3px);
    }
  }
`;

interface Props {
  password: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.MouseEvent) => void;
  onKeyPress: (e: React.KeyboardEvent<HTMLInputElement> & React.MouseEvent) => void;
}

const Login: React.FC<Props> = ({ password, onChange, onSubmit, onKeyPress }) => {
  return (
    <Container>
      <AuthBox>
        <h2>로그인</h2>

        <InputBox>
          <label>
            비밀번호<span>*</span>
          </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            onKeyPress={onKeyPress}
            required
          />
        </InputBox>

        <ButtonBox>
          <button onClick={onSubmit}>로그인</button>
        </ButtonBox>
      </AuthBox>
    </Container>
  );
};

export default Login;