import { gql } from '@apollo/client';

/**
 * List Stories
 * @param {
 *  title: string
 *  tag: string
 *  cursor: ID}
 * @returns {
 *  ok: Boolean
 *  error: String
 *  stories: [Story]
 * }
 */
export const LIST_STORIES = gql`
  query ListStories($title: String, $tag: String, $cursor: ID) {
    ListStories(title: $title, tag: $tag, cursor: $cursor) {
      ok
      error
      stories {
        id
        title
        body
        thumbnail
        tags
        created_at
        updated_at
      }
    }
  }
`;

/**
 * Read Story
 * @param { id: ID! }
 * @returns {
 *  ok: Boolean
 *  error: String
 *  story: Story
 */
export const READ_STORY = gql`
  query ReadStory($id: ID!) {
    ReadStory(id: $id) {
      ok
      error
      story {
        id
        title
        body
        thumbnail
        tags
        created_at
        updated_at
      }
    }
  }
`;

/**
 * Add Story
 * @param {
 *  title: String!
 *  body: String!
 *  thumbnail: String
 *  tags: [String]
 * }
 * @returns {
 *  ok: Boolean
 *  error: String
 *  story: Story
 * }
 */
export const ADD_STORY = gql`
  mutation AddStory(
    $title: String!
    $body: String!
    $thumbnail: String
    $tags: [String]
  ) {
    AddStory(title: $title, body: $body, thumbnail: $thumbnail, tags: $tags) {
      ok
      error
      story {
        id
        title
        body
        thumbnail
        tags
        created_at
      }
    }
  }
`;

/**
 * Remove Story
 * @param { id: ID! }
 * @returns {
 *  ok: Boolean
 *  error: String
 * }
 */
export const REMOVE_STORY = gql`
  mutation RemoveStory($id: ID!) {
    RemoveStory(id: $id) {
      ok
      error
    }
  }
`;

/**
 * Update Story
 * @param {
 *  id: ID!
 *  title: String
 *  body: String
 *  thumbnail: String
 *  tags: [String]
 * }
 * @returns {
 *  ok: Boolean
 *  error: String
 * }
 */
export const UPDATE_STORY = gql`
  mutation UpdateStory(
    $id: ID!
    $title: String
    $body: String
    $thumbnail: String
    $tags: [String]
  ) {
    UpdateStory(id: $id, title: $title, body: $body, thumbnail: $thumbnail, tags: $tags) {
      ok
      error
    }
  }
`;
