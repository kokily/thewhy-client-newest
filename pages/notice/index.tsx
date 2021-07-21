import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import PageTemplate from '../../components/common/PageTemplate';
import ListNotices from '../../components/notices/ListNotices';
import { initializeApollo } from '../../libs/apollo/client';
import useAdmin from '../../libs/hooks/useAdmin';
import { LIST_NOTICE } from './graphql';
import useListNotices from './hooks/useListNotices';

interface Props {
  metaBody: string[];
}

const ListNoticesPage: NextPage<Props> = ({ metaBody }) => {
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

  return (
    <>
      <Head>
        <title>공지사항 - 더와이컨설팅</title>
        <link rel="canonical" href="https://thewhy.kr/notice" />
        {metaBody && <meta name="description" content={metaBody.join()} />}
      </Head>

      <PageTemplate>
        <ListNotices
          notice={notice}
          lastPage={lastPage}
          page={page}
          me={me}
          onRead={onRead}
          onWrite={onWrite}
          search={search}
          onChange={onChange}
          onSearch={onSearch}
          onKeyPress={onKeyPress}
        />
      </PageTemplate>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const apollo = initializeApollo();

  const notices = await apollo.query<{ ListNotice: { notice: NoticeType[] } }>({
    query: LIST_NOTICE,
  });

  const metaBody = notices?.data.ListNotice.notice.map((notice) => {
    return notice.body
      .replace(/ /gi, '')
      .replace(/[\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]/gi, '')
      .substring(0, 50);
  });

  return {
    props: {
      metaBody,
    },
  };
};

export default ListNoticesPage;
