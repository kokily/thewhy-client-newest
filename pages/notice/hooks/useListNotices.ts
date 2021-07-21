import React, { useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/react-hooks';
import { LIST_NOTICE } from '../graphql';
import { ME } from '../../../libs/graphql/auth';

function ListNoticesContainer() {
  const router = useRouter();
  const { page }: { page?: number } = router.query;
  const [search, setSearch] = useState('');
  const [title, setTitle] = useState('');
  const { data, loading, error, refetch } = useQuery<{
    ListNotice: { notice: NoticeType[]; lastPage: number };
  }>(LIST_NOTICE, {
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
    router.push(`/notice/${id}`);
  };

  const onWrite = () => {
    router.push('/notice/write');
  };

  return {
    notice: data?.ListNotice.notice,
    lastPage: data?.ListNotice.lastPage,
    page: page ? page : 1,
    me: me?.Me.me,
    onRead,
    onWrite,
    search,
    onChange,
    onSearch,
    onKeyPress,
    loading,
    error,
    meLoading,
  };
}

export default ListNoticesContainer;
