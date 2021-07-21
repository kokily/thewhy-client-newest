import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useApolloClient, useMutation, useQuery } from '@apollo/react-hooks';
import { ADD_NOTICE, READ_NOTICE, UPDATE_NOTICE } from '../graphql';

function useWriteNotice({ edit }: { edit?: boolean }) {
  const router = useRouter();
  const client = useApolloClient();
  const { id }: { id?: string } = router.query;
  const { data, loading } = useQuery<{ ReadNotice: { notice: NoticeType | null } }>(
    READ_NOTICE,
    {
      variables: { id },
    }
  );
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [AddNotice] = useMutation(ADD_NOTICE);
  const [UpdateNotice] = useMutation(UPDATE_NOTICE);

  const onChangeTitle = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTitle(e.target.value);
  }, []);

  const onChangeBody = useCallback((text: string) => {
    setBody(text);
  }, []);

  const onBack = () => {
    router.back();
  };

  const onSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();

    if ([title, body].includes('')) {
      alert('빈 내용 없이 입력해주세요');
      return;
    }

    try {
      if (!edit) {
        const response = await AddNotice({
          variables: {
            title,
            body,
          },
        });

        if (!response || !response.data) return;

        await client.clearStore();
        router.push('/notice');
      } else {
        const response = await UpdateNotice({
          variables: {
            id,
            title,
            body,
          },
        });

        if (!response || !response.data) return;

        await client.clearStore();
        router.push('/notice');
      }
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    if (data?.ReadNotice.notice) {
      setTitle(data.ReadNotice.notice.title);
      setBody(data.ReadNotice.notice.body);
    }
  }, [edit, data]);

  return {
    title,
    body,
    onChangeTitle,
    onChangeBody,
    onBack,
    onSubmit,
  };
}

export default useWriteNotice;
