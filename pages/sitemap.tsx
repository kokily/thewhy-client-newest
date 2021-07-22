import { NextPage } from 'next';
import PageTemplate from '../components/common/PageTemplate';
import TitleHeader from '../components/common/TitleHeader';

const SitemapPage: NextPage = () => {
  return (
    <PageTemplate>
      <TitleHeader title="사이트 맵" />
    </PageTemplate>
  );
};

export default SitemapPage;
