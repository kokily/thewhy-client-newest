import React, { useCallback, useState } from 'react';
import { gql } from '@apollo/client';
import { useMutation } from '@apollo/react-hooks';

const LOGIN = gql`
  mutation Login($password: String!) {
    Login(password: $password) {
      ok
      error
    }
  }
`;

function useLogin() {
  const [Login, { client }] = useMutation(LOGIN);
  const [password, setPassword] = useState('');

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
    },[]
  )

  const onSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();

    if (password === '') {
      alert('비밀번호를 입력하세요!');
      return;
    }

    try {
      const response = await Login({
        variables: { password },
      });

      if (response.data.Login.error) {
        alert(response.data.Login.error);
        setPassword('');
        return;
      } else {
        if (!response || !response.data) return;

        await client.clearStore();

        document.location.href = '/';
      }
    } catch (err) {
      alert(err);
    }
  }

  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement> & React.MouseEvent) => {
    if (e.key === 'Enter') {
      onSubmit(e);
    }
  }

  return {
    password,
    onChange,
    onSubmit,
    onKeyPress,
  };
}

export default useLogin;
