import { useEffect, useState } from 'react';

function useHeaderScroll() {
  const [move, setMove] = useState(0);

  const handleScroll = () => {
    setMove(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return {
    move,
  };
}

export default useHeaderScroll;
