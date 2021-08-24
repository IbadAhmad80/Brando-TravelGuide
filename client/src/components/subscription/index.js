import { gql } from "@apollo/client";

export const newComment = gql`
  subscription comment($postId: ID!) {
    comment(postId: $postId) {
      id
      text
      name
      email
      postID
      blog {
        id
      }
    }
  }
`;
