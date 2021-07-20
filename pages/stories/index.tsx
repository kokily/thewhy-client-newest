import { GetServerSideProps, NextPage } from "next";
import Head from 'next/head';
import PageTemplate from "../../components/common/PageTemplate";
import TitleHeader from "../../components/common/TitleHeader";
import ListStories from "../../components/stories/ListStories";
import { initializeApollo } from "../../libs/apollo/client";
import useListStories from "./hooks/useListStories";
import { LIST_STORIES } from "./hooks/useScrollStories";

interface Props {
  metaBody: string[];
  metaTags: string[];
}

const ListStoriesPage: NextPage<Props> = ({ metaBody, metaTags }) => {
  const {
    stories,
    search,
    onChange,
    onSearch,
    onKeyPress,
    me,
    loading,
    error,
    meLoading,
  } = useListStories();

  if (loading) return null;
  if (error) return null;
  if (meLoading) return null;

  return (
    <>
      <Head>
        <title>The Y 이야기 - 더와이컨설팅</title>
        <link rel="canonical" href="https://thewhy.kr/stories" />
        {metaBody && <meta name="description" content={metaBody.join()} />}
        {metaTags && <meta name="keywords" content={metaTags.join()} />}
      </Head>
      <PageTemplate>
        <TitleHeader title="The Y 이야기" />
        <ListStories
          stories={stories}
          search={search}
          onChange={onChange}
          onSearch={onSearch}
          onKeyPress={onKeyPress}
          me={me}
        />
      </PageTemplate>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const apollo = initializeApollo();

  const stories = await apollo.query<{ ListStories: { stories: StoryType[] } }>({
    query: LIST_STORIES,
  });

  const metaBody = stories?.data.ListStories.stories.map((story) => {
    return story.body
      .replace(/ /gi, '')
      .replace(/[\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]/gi, '')
      .substring(0, 50);
  });

  const metaTags = stories?.data.ListStories.stories.map((story) => {
    return story.tags.join();
  });

  return {
    props: {
      metaBody,
      metaTags,
    },
  };
}

export default ListStoriesPage;