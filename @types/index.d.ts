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
