import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import PageTemplate from '../../components/common/PageTemplate';
import ReadQuestion from '../../components/questions/ReadQuestion';
import { initializeApollo } from '../../libs/apollo/client';
import { READ_QUESTION } from './graphql';
import useReadQuestion from './hooks/useReadQuestion';

interface Props {
  question: QuestionType;
}

const ReadQuestionPage: NextPage<Props> = ({ question }) => {
  const {
    question: data,
    me,
    reply,
    toggle,
    onChange,
    onToggle,
    onRemove,
    onAddReply,
    onRemoveReply,
    isEdit,
    loading,
    error,
    meLoading,
  } = useReadQuestion();
  const keywords = question.reply?.body;
  const description = question.body
    .replace(/ /gi, '')
    .replace(/[\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]/gi, '')
    .substring(0, 50);

  if (loading) return null;
  if (error) return null;
  if (meLoading) return null;

  return (
    <>
      <Head>
        {question && (
          <>
            <title>{question.title} - 더와이컨설팅</title>
            <meta name="keywords" content={keywords} />
            <meta name="description" content={description} />
          </>
        )}
      </Head>

      <PageTemplate>
        <ReadQuestion
          question={question}
          me={me}
          reply={reply}
          toggle={toggle}
          onChange={onChange}
          onToggle={onToggle}
          onRemove={onRemove}
          onAddReply={onAddReply}
          onRemoveReply={onRemoveReply}
          isEdit={isEdit}
        />
      </PageTemplate>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id }: { id?: string } = context.params;
  const apollo = initializeApollo();

  const question = await apollo.query<{
    ReadQuestion: { question: QuestionType | null };
  }>({
    query: READ_QUESTION,
    variables: { id },
  });

  return {
    props: {
      question: question.data?.ReadQuestion.question,
    },
  };
};

export default ReadQuestionPage;
