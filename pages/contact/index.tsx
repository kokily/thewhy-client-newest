import { NextPage } from 'next';
import Head from 'next/head';
import PageTemplate from '../../components/common/PageTemplate';
import Contact from '../../components/contact/Contact';
import useMail from './hooks/useMail';

const ContactPage: NextPage = () => {
  const mail = useMail();

  return (
    <>
      <Head>
        <title>Contact Us - 더와이컨설팅</title>
        <link rel="canonical" href="https://thewhy.kr/contact" />
      </Head>
      <PageTemplate>
        <Contact mail={mail} />
      </PageTemplate>
    </>
  );
}

export default ContactPage;