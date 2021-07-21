import { useQuery } from '@apollo/react-hooks';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { ME } from '../graphql/auth';

function useAdmin() {
  const router = useRouter();
  const { data, loading } = useQuery<{ Me: { me: MeType | null } }>(ME);

  useEffect(() => {
    if (!loading && !data?.Me.me) {
      router.replace('/');
    }
  }, [loading, data, router]);
}

export default useAdmin;
