import { gql } from '@apollo/client';

/**
 * List Questions
 * @param {page: Int, title: String}
 * @returns {
 *  ok: Boolean!
 *  error: String
 *  questions: [Question]
 *  lastPage: Int
 * }
 */
export const LIST_QUESTIONS = gql`
  query ListQuestions($page: Int, $title: String) {
    ListQuestions(page: $page, title: $title) {
      ok
      error
      questions {
        id
        name
        body
        isReply
        title
        created_at
      }
      lastPage
    }
  }
`;

/**
 * Read Question
 * @param {id: ID!}
 * @returns {
 *  ok: Boolean!
 *  error: String
 *  question: {
 *    id: ID!
 *    name: String!
 *    phone: String
 *    email: String
 *    isReply: Boolean!
 *    title: String!
 *    body: String!
 *    replyId: String
 *    reply: Reply
 *    created_at: Date!
 *    updated_at: Date
 *  }
 * }
 */
export const READ_QUESTION = gql`
  query ReadQuestion($id: ID!) {
    ReadQuestion(id: $id) {
      ok
      error
      question {
        id
        name
        phone
        email
        isReply
        title
        body
        replyId
        reply {
          id
          body
        }
        password
        created_at
        updated_at
      }
    }
  }
`;

/**
 * Add Question
 */
export const ADD_QUESTION = gql`
  mutation AddQuestion(
    $name: String!
    $password: String!
    $phone: String
    $email: String
    $title: String!
    $body: String!
  ) {
    AddQuestion(
      name: $name
      password: $password
      phone: $phone
      email: $email
      title: $title
      body: $body
    ) {
      ok
      error
    }
  }
`;

/**
 * Remove Question
 * @param {
 *  id: ID!
 *  password: String!
 * }
 * @returns {
 *  ok: Boolean!
 *  error: String
 * }
 */
export const REMOVE_QUESTION = gql`
  mutation RemoveQuestion($id: ID!, $password: String) {
    RemoveQuestion(id: $id, password: $password) {
      ok
      error
    }
  }
`;

/**
 * Update Question
 * @param {
 *  id: ID!
 *  password: String!
 *  name: String
 *  phone: String
 *  email: String
 *  title: String
 *  body: String
 * }
 * @returns {
 *  ok: Boolean!
 *  error: String
 * }
 */
export const UPDATE_QUESTION = gql`
  mutation UpdateQuestion(
    $id: ID!
    $password: String!
    $name: String
    $phone: String
    $email: String
    $title: String
    $body: String
  ) {
    UpdateQuestion(
      id: $id
      password: $password
      name: $name
      phone: $phone
      email: $email
      title: $title
      body: $body
    ) {
      ok
      error
    }
  }
`;

/**
 * Valid Password
 * @param {id: ID!, password: String!}
 * @returns {
 *  ok: Boolean!
 *  error: String!
 * }
 */
export const VALID_PASSWORD = gql`
  mutation ValidPassword($id: ID!, $password: String!) {
    ValidPassword(id: $id, password: $password) {
      ok
      error
    }
  }
`;

export const REMOVE_ADMIN_QUESTION = gql`
  mutation RemoveAdminQuestion($id: ID!) {
    RemoveAdminQuestion(id: $id) {
      ok
      error
    }
  }
`;
