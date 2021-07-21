import { useRouter } from 'next/router';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { READ_STORY, REMOVE_STORY } from '../graphql';
import { ME } from '../../../libs/graphql/auth';

function useReadStory() {
  const router = useRouter();
  const { id }: { id?: string } = router.query;
  const { data, loading, error } = useQuery<{ ReadStory: { story: StoryType } }>(
    READ_STORY,
    {
      variables: { id },
    }
  );
  const { data: me, loading: meLoading } = useQuery<{ Me: { me: MeType | null } }>(ME);
  const [RemoveStory, { client }] = useMutation(REMOVE_STORY);

  const onRemove = async () => {
    try {
      const response = await RemoveStory({
        variables: { id },
      });

      if (!response || !response.data) return;

      await client.clearStore();

      router.back();
    } catch (err) {
      alert(err);
    }
  };

  const onUpdate = () => {
    router.push(`/stories/edit/${id}`);
  };

  return {
    story: data?.ReadStory.story,
    me: me?.Me.me,
    onRemove,
    onUpdate,
    loading,
    error,
    meLoading,
  };
}

export default useReadStory;
