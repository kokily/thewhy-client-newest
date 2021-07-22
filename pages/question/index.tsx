import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import PageTemplate from '../../components/common/PageTemplate';
import ListQuestions from '../../components/questions/ListQuestions';
import { initializeApollo } from '../../libs/apollo/client';
import { LIST_QUESTIONS } from './graphql';
import useListQuestions from './hooks/useListQuestions';

interface Props {
  metaBody: string[];
}

const ListQuestionsPage: NextPage<Props> = ({ metaBody }) => {
  const {
    questions,
    me,
    lastPage,
    page,
    onRead,
    onAdd,
    search,
    onChange,
    onSearch,
    onKeyPress,
    loading,
    error,
    meLoading,
  } = useListQuestions();

  if (loading) return null;
  if (error) return null;
  if (meLoading) return null;

  return (
    <>
      <Head>
        <title>교육 문의 - 더와이컨설팅</title>
        <link rel="canonical" href="https://thewhy.kr/questions" />
        {metaBody && <meta name="description" content={metaBody.join()} />}
      </Head>

      <PageTemplate>
        <ListQuestions
          questions={questions}
          me={me}
          lastPage={lastPage}
          page={page}
          onRead={onRead}
          onAdd={onAdd}
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

  const questions = await apollo.query<{ ListQuestions: { questions: QuestionType[] } }>({
    query: LIST_QUESTIONS,
  });

  const metaBody = questions?.data.ListQuestions.questions.map((question) => {
    return question.body
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

export default ListQuestionsPage;
