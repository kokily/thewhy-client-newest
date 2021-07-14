import { atom } from 'recoil';

export const HomeMenu = atom<boolean>({
  key: 'HomeMenu',
  default: false,
});

export const EduMenu = atom<boolean>({
  key: 'EduMenu',
  default: false,
});

export const CommuMenu = atom<boolean>({
  key: 'CommuMenu',
  default: false,
});
