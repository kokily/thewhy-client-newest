interface MenuType {
  id: number;
  title: string;
  url: string;
  items?: ItemType[];
}

interface ItemType {
  id: number;
  subTitle: string;
  subUrl: string;
}

interface MainLinkType {
  id: number;
  url: string;
  img: string;
  title: string;
  sub: string;
}

interface StoryType {
  id: string;
  title: string;
  body: string;
  thumbnail?: string;
  tags?: [string];
  created_at: string;
  updated_at?: string;
}

interface MeType {
  adminId: string;
}