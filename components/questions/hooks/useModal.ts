import { useState } from 'react';

interface Props {
  onRemove: () => void;
  onRemoveReply: () => void;
}

function useModal({ onRemove, onRemoveReply }: Props) {
  const [modal, setModal] = useState(false);
  const [replyModal, setReplyModal] = useState(false);

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

  const onRemoveReplyClick = () => {
    setReplyModal(true);
  };

  const onReplyConfirm = () => {
    setReplyModal(false);
    onRemoveReply();
  };

  const onReplyCancel = () => {
    setReplyModal(false);
  };

  return {
    modal,
    onRemoveClick,
    onConfirm,
    onCancel,
    replyModal,
    onRemoveReplyClick,
    onReplyConfirm,
    onReplyCancel,
  };
}

export default useModal;
