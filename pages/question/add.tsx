import { NextPage } from 'next';
import PageTemplate from '../../components/common/PageTemplate';
import TitleHeader from '../../components/common/TitleHeader';
import AddQuestion from '../../components/questions/AddQuestion';
import useAddQuestion from './hooks/useAddQuestion';

const AddQuestionPage: NextPage = () => {
  const {
    name,
    password,
    phone,
    email,
    title,
    body,
    agree,
    onChange,
    onChangeBody,
    onChangeAgree,
    onSubmit,
    loading,
  } = useAddQuestion({});

  if (loading) return null;

  return (
    <PageTemplate>
      <TitleHeader title="교육 문의" />
      <AddQuestion
        name={name}
        password={password}
        phone={phone}
        email={email}
        title={title}
        body={body}
        agree={agree}
        onChange={onChange}
        onChangeBody={onChangeBody}
        onChangeAgree={onChangeAgree}
        onSubmit={onSubmit}
      />
    </PageTemplate>
  );
};

export default AddQuestionPage;
