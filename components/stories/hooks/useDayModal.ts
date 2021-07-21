import { useState } from 'react';

interface Props {
  story: StoryType;
  onRemove: () => void;
}

function useDayModal({ story, onRemove }: Props) {
  const month = new Date(story.created_at).getMonth();
  const day = new Date(story.created_at).getDay();
  const week = ['일', '월', '화', '수', '목', '금', '토'];
  const dayOfWeek = week[new Date(story.created_at).getDay()];
  const [modal, setModal] = useState(false);

  const onRemoveClick = () => {
    setModal(true);
  };

  const onConfirm = () => {
    setModal(false);
    onRemove();
  };

  const onCancel = () => {
    setModal(false);
  };

  return {
    month,
    day,
    dayOfWeek,
    modal,
    onRemoveClick,
    onConfirm,
    onCancel,
  };
}

export default useDayModal;
