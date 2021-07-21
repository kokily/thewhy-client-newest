import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import PageTemplate from '../../components/common/PageTemplate';
import TitleHeader from '../../components/common/TitleHeader';
import ReadNotice from '../../components/notices/ReadNotice';
import { initializeApollo } from '../../libs/apollo/client';
import { READ_NOTICE } from './graphql';
import useReadNotice from './hooks/useReadNotice';

interface Props {
  notice: NoticeType;
}

const ReadNoticePage: NextPage<Props> = ({ notice }) => {
  const {
    notice: data,
    me,
    onRemove,
    onUpdate,
    loading,
    error,
    meLoading,
  } = useReadNotice();
  const description = notice.body
    .replace(/ /gi, '')
    .replace(/[\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]/gi, '')
    .substring(0, 50);

  if (loading) return null;
  if (error) return null;
  if (meLoading) return null;

  return (
    <>
      <Head>
        {notice && (
          <>
            <title>{notice.title} - 더와이컨설팅</title>
            <meta name="description" content={description} />
          </>
        )}
      </Head>

      <PageTemplate>
        <TitleHeader title={data.title} />
        <ReadNotice notice={data} me={me} onRemove={onRemove} onUpdate={onUpdate} />
      </PageTemplate>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id }: { id?: string } = context.params;
  const apollo = initializeApollo();

  const notice = await apollo.query<{ ReadNotice: { notice: NoticeType } }>({
    query: READ_NOTICE,
    variables: { id },
  });

  return {
    props: {
      notice: notice.data?.ReadNotice.notice,
    },
  };
};

export default ReadNoticePage;
