import { useReducer } from 'react';
import { useRouter } from 'next/router';
import { gql } from '@apollo/client';
import { useMutation } from '@apollo/react-hooks';

export const SEND_CONTACT = gql`
  mutation SendContact(
    $name: String!
    $email: String!
    $subject: String!
    $body: String!
  ) {
    SendContact(name: $name, email: $email, subject: $subject, body: $body) {
      ok
      error
    }
  }
`;

type StateProps = {
  name: string;
  email: string;
  subject: string;
  body: string;
};

type ActionProps = {
  name: string;
  value: string;
};

const reducer = (state: StateProps, action: ActionProps) => {
  return {
    ...state,
    [action.name]: action.value,
  };
}

function useMail() {
  const router = useRouter();
  const [state, dispatch] = useReducer(reducer, {
    name: '',
    email: '',
    subject: '',
    body: '',
  });
  const { name, email, subject, body } = state;
  const [SendContact, { client }] = useMutation(SEND_CONTACT);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    dispatch(e.target);
  };

  const onSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();

    try {
      const response = await SendContact({
        variables: {
          name,
          email,
          subject,
          body,
        },
      });

      if (!response || !response.data) return;

      await client.clearStore();

      alert('메일 전송 완료!');
      router.reload();
    } catch (err) {
      alert(err);
    }
  };

  return {
    name,
    email,
    subject,
    body,
    onChange,
    onSubmit,
  };
}

export default useMail;