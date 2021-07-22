import { NextPage } from 'next';
import PageTemplate from '../components/common/PageTemplate';
import TitleHeader from '../components/common/TitleHeader';
import Privacy from '../components/privacy/Privacy';

const PrivacyPage: NextPage = () => {
  return (
    <PageTemplate>
      <TitleHeader title="개인정보 처리방침" />
      <Privacy />
    </PageTemplate>
  );
};

export default PrivacyPage;
