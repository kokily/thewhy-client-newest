import { NextPage } from 'next';
import WriteNotice from '../../../components/notices/WriteNotice';
import useAdmin from '../../../libs/hooks/useAdmin';
import useWriteNotice from '../hooks/useWriteNotice';

const UpdateNoticePage: NextPage = () => {
  useAdmin();
  const { title, body, onChangeTitle, onChangeBody, onBack, onSubmit } = useWriteNotice({
    edit: true,
  });

  return (
    <WriteNotice
      edit={true}
      title={title}
      body={body}
      onChangeTitle={onChangeTitle}
      onChangeBody={onChangeBody}
      onBack={onBack}
      onSubmit={onSubmit}
    />
  );
};

export default UpdateNoticePage;
