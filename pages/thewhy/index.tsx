import { NextPage } from 'next';
import PageTemplate from '../../components/common/PageTemplate';
import TitleHeader from '../../components/common/TitleHeader';
import Login from '../../components/thewhy/Login';
import useLogin from './hooks/useLogin';

const ThewhyPage: NextPage = () => {
  const { password, onChange, onSubmit, onKeyPress } = useLogin();

  return (
    <PageTemplate>
      <TitleHeader title="관리자 로그인" />
      <Login
        password={password}
        onChange={onChange}
        onSubmit={onSubmit}
        onKeyPress={onKeyPress}
      />
    </PageTemplate>
  );
};

export default ThewhyPage;