import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/react-hooks';
import useScrollStories from './useScrollStories';
import { ME } from '../../../libs/graphql/auth';

function useListStories() {
  const router = useRouter();
  const [search, setSearch] = useState('');
  const [title, setTitle] = useState('');
  const { data, loading, error } = useScrollStories(title);
  const { data: me, loading: meLoading } = useQuery<{ Me: { me: MeType | null } }>(ME);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSearch = (e: React.MouseEvent) => {
    e.preventDefault();

    if (search === '') {
      return;
    } else {
      setTitle(search);
    }
  };

  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement> & React.MouseEvent) => {
    if (e.key === 'Enter') {
      onSearch(e);
    }
  };

  const onDetail = (id: string) => {
    router.push(`/stories/${id}`);
  };

  return {
    stories: data?.ListStories.stories || [],
    search,
    onChange,
    onSearch,
    onKeyPress,
    onDetail,
    me: me?.Me.me,
    loading,
    error,
    meLoading,
  };
}

export default useListStories;
