import React, { useCallback, useReducer, useState } from 'react';
import { useRouter } from 'next/router';
import { useApolloClient, useMutation, useQuery } from '@apollo/react-hooks';
import { ADD_QUESTION, READ_QUESTION, UPDATE_QUESTION } from '../graphql';

type StateProps = {
  name: string;
  password: string;
  phone: string;
  email: string;
  title: string;
};

type ActionProps = {
  name: string;
  value: string;
};

const reducer = (state: StateProps, action: ActionProps) => {
  return {
    ...state,
    [action.name]: action.value,
  };
};

function useAddQuestion({ edit }: { edit?: boolean }) {
  const router = useRouter();
  const client = useApolloClient();
  const { id }: { id?: string } = router.query;
  const { data, loading } = useQuery<{ ReadQuestion: { question: QuestionType | null } }>(
    READ_QUESTION,
    {
      variables: { id },
    }
  );
  const [AddQuestion] = useMutation(ADD_QUESTION);
  const [UpdateQuestion] = useMutation(UPDATE_QUESTION);
  const [state, dispatch] = useReducer(reducer, {
    name: data?.ReadQuestion.question.name || '',
    password: '',
    phone: data?.ReadQuestion.question.phone || '',
    email: data?.ReadQuestion.question.email || '',
    title: data?.ReadQuestion.question.title || '',
  });
  const { name, password, phone, email, title } = state;
  const [body, setBody] = useState(data?.ReadQuestion.question.body || '');
  const [agree, setAgree] = useState(false);

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(e.target);
  }, []);

  const onChangeBody = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBody(e.target.value);
  }, []);

  const onChangeAgree = () => {
    setAgree((prev) => !prev);
  };

  const onSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();

    if ([name, password, title, body].includes('')) {
      alert('* 표시는 필수 작성입니다.');
      return;
    }

    if (!agree) {
      alert('정보 제공에 동의해 주셔야 합니다.');
      return;
    }

    try {
      if (!edit) {
        const response = await AddQuestion({
          variables: {
            name,
            password,
            phone,
            email,
            title,
            body,
          },
        });

        if (!response || !response.data) return;

        await client.clearStore();

        router.push('/question');
      } else {
        const response = await UpdateQuestion({
          variables: {
            id,
            name,
            password,
            phone,
            email,
            title,
            body,
          },
        });

        if (!response) return;
        if (response.data.UpdateQuestion.error) {
          alert(response.data.UpdateQuestion.error);
          return;
        } else {
          await client.clearStore();

          router.back();
        }
      }
    } catch (err) {
      alert(err);
    }
  };

  return {
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
    loading,
  };
}

export default useAddQuestion;
