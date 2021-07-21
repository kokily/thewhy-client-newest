import { useMutation, useQuery } from '@apollo/react-hooks';
import { useRouter } from 'next/router';
import { ME } from '../../../libs/graphql/auth';
import { READ_NOTICE, REMOVE_NOTICE } from '../graphql';

function useReadNotice() {
  const router = useRouter();
  const { id }: { id?: string } = router.query;
  const { data, loading, error } = useQuery<{ ReadNotice: { notice: NoticeType } }>(
    READ_NOTICE,
    {
      variables: { id },
    }
  );
  const { data: me, loading: meLoading } = useQuery<{ Me: { me: MeType | null } }>(ME);
  const [RemoveNotice, { client }] = useMutation(REMOVE_NOTICE);

  const onRemove = async () => {
    try {
      const response = await RemoveNotice({
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
    router.push(`/notice/edit/${id}`);
  };

  return {
    notice: data?.ReadNotice.notice,
    me: me?.Me.me,
    onRemove,
    onUpdate,
    loading,
    error,
    meLoading,
  };
}

export default useReadNotice;
