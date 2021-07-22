import { NextPage } from 'next';
import PageTemplate from '../components/common/PageTemplate';
import TitleHeader from '../components/common/TitleHeader';
import Sitemap from '../components/sitemap/Sitemap';
import { NavMenu as menu } from '../libs/menu';

const SitemapPage: NextPage = () => {
  return (
    <PageTemplate>
      <TitleHeader title="사이트 맵" />

      <Sitemap menu={menu} />
    </PageTemplate>
  );
};

export default SitemapPage;
