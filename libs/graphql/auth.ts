import { gql } from '@apollo/client';

export const ME = gql`
  query Me {
    Me {
      ok
      error
      me {
        adminId
      }
    }
  }
`;