import { useCallback, useState } from 'react';
import { gql } from '@apollo/client';
import { useQuery } from '@apollo/react-hooks';
import useScroll from '../../../libs/hooks/useScroll';

export const LIST_STORIES = gql`
  query ListStories($title: String, $tag: String, $cursor: ID) {
    ListStories(title: $title, tag: $tag, cursor: $cursor) {
      ok
      error
      stories {
        id
        title
        body
        thumbnail
        tags
        created_at
        updated_at
      }
    }
  }
`;

function useScrollStories(title?: string) {
  const { data, loading, error, fetchMore } = useQuery<{
    ListStories: { stories: StoryType[] };
  }>(LIST_STORIES, {
    variables: { title },
  });
  const [isFinished, setIsFinished] = useState(false);

  const onLoadMore = useCallback(
    (cursor: string) => {
      fetchMore({
        variables: {
          title,
          cursor,
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult) return prev;
          if (fetchMoreResult.ListStories.stories.length === 0) {
            setIsFinished(true);
          }

          return {
            ListStories: {
              ...prev.ListStories,
              stories: [
                ...prev.ListStories.stories,
                ...fetchMoreResult.ListStories.stories,
              ],
            },
          };
        },
      });
    },
    [title, fetchMore]
  );

  const cursor = data?.ListStories.stories[data?.ListStories.stories.length - 1]?.id;

  useScroll({
    cursor,
    onLoadMore,
  });

  return { data, loading, error, isFinished };
}

export default useScrollStories;
