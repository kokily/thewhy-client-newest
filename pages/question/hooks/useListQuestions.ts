import { useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { LIST_QUESTIONS } from '../graphql';
import { ME } from '../../../libs/graphql/auth';

function useListQuestions() {
  const router = useRouter();
  const { page }: { page?: number } = router.query;
  const [search, setSearch] = useState('');
  const [title, setTitle] = useState('');
  const { data, loading, error, refetch } = useQuery<{
    ListQuestions: { questions: QuestionType[]; lastPage: number };
  }>(LIST_QUESTIONS, {
    variables: {
      page: page ? parseInt(page.toString()) : 1,
      title,
    },
  });
  const { data: me, loading: meLoading } = useQuery<{ Me: { me: MeType | null } }>(ME);

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }, []);

  const onSearch = async (e: React.MouseEvent) => {
    e.preventDefault();

    if (search === '') {
      await refetch();
      return;
    } else {
      setTitle(search);
      await refetch();
    }
  };

  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement> & React.MouseEvent) => {
    if (e.key === 'Enter') {
      onSearch(e);
    }
  };

  const onRead = (id: string) => {
    router.push(`/question/${id}`);
  };

  return {
    questions: data?.ListQuestions.questions,
    me: me?.Me.me,
    lastPage: data?.ListQuestions.lastPage,
    page: page ? page : 1,
    onRead,
    search,
    onChange,
    onSearch,
    onKeyPress,
    loading,
    error,
    meLoading,
  };
}

export default useListQuestions;
