import { NextPage } from 'next';
import AddStory from '../../components/stories/AddStory';
import useAdmin from '../../libs/hooks/useAdmin';
import useAddStory from './hooks/useAddStory';

const AddStoryPage: NextPage = () => {
  useAdmin();
  const {
    title,
    body,
    thumbnail,
    tags,
    onChangeTitle,
    onChangeBody,
    onThumbnail,
    onChangeTags,
    onBack,
    onSubmit,
    loading,
  } = useAddStory({});

  if (loading) return null;

  return (
    <AddStory
      edit={false}
      title={title}
      body={body}
      thumbnail={thumbnail}
      tags={tags}
      onChangeTitle={onChangeTitle}
      onChangeBody={onChangeBody}
      onChangeTags={onChangeTags}
      onBack={onBack}
      onThumbnail={onThumbnail}
      onSubmit={onSubmit}
    />
  );
};

export default AddStoryPage;
