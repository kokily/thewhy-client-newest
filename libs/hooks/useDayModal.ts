import { useState } from 'react';

interface Props {
  target: StoryType | NoticeType;
  onRemove: () => void;
}

function useDayModal({ target, onRemove }: Props) {
  const year = new Date(target.created_at).getFullYear();
  const month = new Date(target.created_at).getMonth();
  const day = new Date(target.created_at).getDay();
  const week = ['일', '월', '화', '수', '목', '금', '토'];
  const dayOfWeek = week[new Date(target.created_at).getDay()];
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
    year,
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
