import React, { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useApolloClient, useMutation, useQuery } from '@apollo/react-hooks';
import { ADD_STORY, READ_STORY, UPDATE_STORY } from '../graphql';
import { devServer, isProd, prodServer } from '../../../libs/constants';

function useAddStory({ edit }: { edit?: boolean }) {
  const router = useRouter();
  const client = useApolloClient();
  const { id }: { id?: string } = router.query;
  const { data, loading } = useQuery<{ ReadStory: { story: StoryType | null } }>(
    READ_STORY,
    {
      variables: { id },
    }
  );
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [AddStory] = useMutation(ADD_STORY);
  const [UpdateStory] = useMutation(UPDATE_STORY);

  const onChangeTitle = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTitle(e.target.value);
  }, []);

  const onChangeBody = useCallback((text: string) => {
    setBody(text);
  }, []);

  const onChangeTags = (nextTags: string[]) => {
    setTags(nextTags);
  };

  const onBack = () => {
    router.back();
  };

  const onThumbnail = () => {
    const upload = document.createElement('input');

    upload.type = 'file';
    upload.onchange = async (e) => {
      if (!upload.files) return;

      const file = upload.files[0];
      const formData = new FormData();

      formData.append('file', file);

      const response = await fetch(`${isProd ? prodServer : devServer}/upload`, {
        method: 'POST',
        body: formData,
      });

      if (!response) {
        alert('업로드 에러 발생! 관리자에게 문의하세요!');
        return;
      }

      const data = await response.json();

      setThumbnail(`https://d3cz7blqhirvsp.cloudfront.net/${data.key}`);
    };

    upload.click();
  };

  const onSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();

    if ([title, body, tags].includes('')) {
      alert('빈 내용없이 입력해주세요.');
      return;
    }

    let overlapTags = tags === [] ? [] : [...new Set(tags.map((tag) => tag.trim()))];

    try {
      if (!edit) {
        const response = await AddStory({
          variables: {
            title,
            body,
            thumbnail,
            tags: overlapTags,
          },
        });

        if (!response || !response.data) return;

        await client.clearStore();
        router.push('/stories');
      } else {
        const response = await UpdateStory({
          variables: {
            id,
            title,
            body,
            thumbnail,
            tags: overlapTags,
          },
        });

        if (!response || !response.data) return;

        await client.clearStore();
        router.push(`/stories/${id}`);
      }
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    if (data?.ReadStory.story) {
      setTitle(data.ReadStory.story.title);
      setBody(data.ReadStory.story.body);
      setThumbnail(data.ReadStory.story.thumbnail);
      setTags(data.ReadStory.story.tags);
    }
  }, [edit, data]);

  return {
    edit,
    title,
    body,
    thumbnail,
    tags,
    onChangeTitle,
    onChangeBody,
    onThumbnail,
    onChangeTags,
    onBack,
    onSubmit,
    loading,
  };
}

export default useAddStory;
