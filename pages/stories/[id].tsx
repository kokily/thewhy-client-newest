import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import PageTemplate from '../../components/common/PageTemplate';
import ReadStory from '../../components/stories/ReadStory';
import { initializeApollo } from '../../libs/apollo/client';
import { READ_STORY } from './graphql';
import useReadStory from './hooks/useReadStory';

interface Props {
  story: StoryType;
}

const ReadStoryPage: NextPage<Props> = ({ story }) => {
  const {
    story: data,
    me,
    onRemove,
    onUpdate,
    loading,
    error,
    meLoading,
  } = useReadStory();
  const tags = story?.tags.join();
  const description = story.body
    .replace(/ /gi, '')
    .replace(/[\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]/gi, '')
    .substring(0, 50);

  if (loading) return null;
  if (error) return null;
  if (meLoading) return null;

  return (
    <>
      <Head>
        {story && (
          <>
            <title>{story.title} - 더와이컨설팅</title>
            <meta name="keywords" content={tags} />
            <meta name="description" content={description} />
          </>
        )}
      </Head>
      <PageTemplate>
        <ReadStory story={data} me={me} onRemove={onRemove} onUpdate={onUpdate} />
      </PageTemplate>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id }: { id?: string } = context.params;
  const apollo = initializeApollo();

  const response = await apollo.query<{ ReadStory: { story: StoryType } }>({
    query: READ_STORY,
    variables: { id },
  });

  return {
    props: {
      story: response.data?.ReadStory.story,
    },
  };
};

export default ReadStoryPage;
