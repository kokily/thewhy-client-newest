import { gql } from '@apollo/client';

/**
 * List Notice
 * @param {page: Int, title: String}
 * @returns {
 *  ok: Boolean
 *  error: String
 *  notice: Notice
 *  lastPage: Int
 * }
 */
export const LIST_NOTICE = gql`
  query ListNotice($page: Int, $title: String) {
    ListNotice(page: $page, title: $title) {
      ok
      error
      notice {
        id
        num
        title
        body
        created_at
      }
      lastPage
    }
  }
`;

/**
 * Read Notice
 * @param {id: ID!}
 * @returns {
 *  ok: Boolean!
 *  error: String
 *  notice: Notice
 * }
 */
export const READ_NOTICE = gql`
  query ReadNotice($id: ID!) {
    ReadNotice(id: $id) {
      ok
      error
      notice {
        id
        num
        title
        body
        created_at
      }
    }
  }
`;

/**
 * Add Notice
 * @param {title: String!, body: String!}
 * @returns {
 *  ok: Boolean!
 *  error: String
 * }
 */
export const ADD_NOTICE = gql`
  mutation AddNotice($title: String!, $body: String!) {
    AddNotice(title: $title, body: $body) {
      ok
      error
    }
  }
`;

/**
 * Remove Notice
 * @param {id: ID!}
 * @returns {
 *  ok: Boolean!
 *  error: String
 * }
 */
export const REMOVE_NOTICE = gql`
  mutation RemoveNotice($id: ID!) {
    RemoveNotice(id: $id) {
      ok
      error
    }
  }
`;

/**
 * Update Notice
 * @param {
 *  id: ID!
 *  title: String
 *  body: String
 * }
 * @returns {
 *  ok: Boolean!
 *  error: String
 * }
 */
export const UPDATE_NOTICE = gql`
  mutation UpdateNotice($id: ID!, $title: String, $body: String) {
    UpdateNotice(id: $id, title: $title, body: $body) {
      ok
      error
    }
  }
`;
