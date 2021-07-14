import { useCallback, useState } from 'react';

function useHamburgerToggle() {
  const [toggle, setToggle] = useState(false);

  const onToggle = useCallback(() => {
    setToggle((prev) => !prev);
  }, []);

  return {
    toggle,
    onToggle,
  };
}

export default useHamburgerToggle;
