import { useEffect, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import { HomeMenu, EduMenu, CommuMenu } from '../../../libs/store/Menu';

function useHeaderNav() {
  const [home, setHome] = useRecoilState(HomeMenu);
  const [edu, setEdu] = useRecoilState(EduMenu);
  const [commu, setCommu] = useRecoilState(CommuMenu);
  const [, setOutside] = useState(false);
  const ref = useRef<HTMLLIElement>();

  const toggleHome = () => {
    offAll();
    setHome(true);
    setOutside(true);
  };

  const toggleEdu = () => {
    offAll();
    setEdu(true);
    setOutside(true);
  };

  const toggleCommu = () => {
    offAll();
    setCommu(true);
    setOutside(true);
  };

  const offAll = () => {
    setHome(false);
    setEdu(false);
    setCommu(false);
  };

  const handleClickOutside = (e) => {};

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('mousedown', handleClickOutside);

      return () => {
        window.removeEventListener('mousedown', handleClickOutside);
      };
    }
  });

  return {
    home,
    edu,
    commu,
    toggleHome,
    toggleEdu,
    toggleCommu,
    offAll,
    ref,
    handleClickOutside,
  };
}

export default useHeaderNav;
