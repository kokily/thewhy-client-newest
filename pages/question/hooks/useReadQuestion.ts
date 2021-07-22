import React, { useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import { useApolloClient, useMutation, useQuery } from '@apollo/react-hooks';
import { ME } from '../../../libs/graphql/auth';
import {
  ADD_REPLY,
  READ_QUESTION,
  REMOVE_ADMIN_QUESTION,
  REMOVE_QUESTION,
  REMOVE_REPLY,
  VALID_PASSWORD,
} from '../graphql';

function useReadQuestion() {
  const client = useApolloClient();
  const router = useRouter();
  const { id }: { id?: string } = router.query;
  const { data, loading, error, refetch } = useQuery<{
    ReadQuestion: { question: QuestionType };
  }>(READ_QUESTION, {
    variables: { id },
  });
  const { data: me, loading: meLoading } = useQuery<{ Me: { me: MeType | null } }>(ME);
  const [toggle, setToggle] = useState(false);
  const [reply, setReply] = useState('');
  const [RemoveQuestion] = useMutation(REMOVE_QUESTION);
  const [RemoveAdminQuestion] = useMutation(REMOVE_ADMIN_QUESTION);
  const [AddReply] = useMutation(ADD_REPLY);
  const [RemoveReply] = useMutation(REMOVE_REPLY);
  const [ValidPassword] = useMutation(VALID_PASSWORD);

  const onChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReply(e.target.value);
  }, []);

  const onToggle = () => setToggle((prev) => !prev);

  const onRemove = async () => {
    if (!me) {
      let password = window.prompt('작성 시 비밀번호를 입력하세요');

      try {
        const response = await RemoveQuestion({
          variables: { id, password },
        });

        if (!response || !response.data) return;

        await client.clearStore();

        router.push('/question');
      } catch (err) {
        alert(err);
      }
    } else {
      try {
        const response = await RemoveAdminQuestion({
          variables: { id },
        });

        if (!response || !response.data) return;

        await client.clearStore();

        router.push('/question');
      } catch (err) {
        alert(err);
      }
    }
  };

  const onAddReply = async () => {
    if ([reply].includes('')) {
      alert('답글을 작성 후 저장하세요');
      return;
    }

    try {
      const response = await AddReply({
        variables: {
          body: reply,
          questionId: id,
        },
      });

      if (!response || !response.data) return;

      await client.clearStore();
      await refetch();
    } catch (err) {
      alert(err);
    }
  };

  const onRemoveReply = async () => {
    try {
      const response = await RemoveReply({
        variables: { id: data?.ReadQuestion.question.replyId },
      });

      if (!response || !response.data) return;

      await client.clearStore();
      await refetch();
    } catch (err) {
      alert(err);
    }
  };

  const isEdit = async () => {
    const inputData = window.prompt('작성시 비밀번호를 입력해주세요');

    try {
      const response = await ValidPassword({
        variables: { id, password: inputData },
      });

      if (!response) return;
      if (response.data.ValidPassword.error) {
        alert(response.data.ValidPassword.error);
        return;
      }

      router.push(`/question/edit/${id}`);
    } catch (err) {
      alert(err);
    }
  };

  return {
    question: data?.ReadQuestion.question,
    me: me?.Me.me,
    reply,
    toggle,
    onChange,
    onToggle,
    onRemove,
    onAddReply,
    onRemoveReply,
    isEdit,
    loading,
    error,
    meLoading,
  };
}

export default useReadQuestion;
