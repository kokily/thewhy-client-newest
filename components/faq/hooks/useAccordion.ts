import React, { useCallback, useState, useRef } from 'react';

function useAccordion() {
  const parentRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();

      if (parentRef.current === null || childRef.current === null) {
        return;
      }

      if (parentRef.current.clientHeight > 0) {
        parentRef.current.style.height = '0';
      } else {
        parentRef.current.style.height = `${childRef.current.clientHeight}px`;
      }

      setIsOpen(!isOpen);
    },
    [isOpen]
  );

  return {
    isOpen,
    handleClick,
    parentRef,
    childRef,
  };
}

export default useAccordion;
