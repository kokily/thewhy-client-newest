import { NextPage } from 'next';
import useAdmin from '../../libs/hooks/useAdmin';
import useListNotices from './hooks/useListNotices';

const ListNoticesPage: NextPage = () => {
  useAdmin();
  const {
    notice,
    lastPage,
    page,
    me,
    onRead,
    onWrite,
    search,
    onChange,
    onSearch,
    onKeyPress,
    loading,
    error,
    meLoading,
  } = useListNotices();

  if (loading) return null;
  if (error) return null;
  if (meLoading) return null;

  return <div>List Notices</div>;
};

export default ListNoticesPage;
