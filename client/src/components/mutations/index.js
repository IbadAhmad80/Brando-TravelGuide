import { gql } from "@apollo/client";

export const updateViews = gql`
  mutation updateViews($id: ID!) {
    updateBlogViews(id: $id) {
      id
      title
      views
    }
  }
`;

export const createComment = gql`
  mutation commentCreation(
    $text: String!
    $email: String!
    $name: String!
    $postID: ID!
  ) {
    createComment(
      data: { text: $text, email: $email, name: $name, postID: $postID }
    ) {
      id
      text
      email
      name
      blog {
        id
        title
        comments {
          id
          text
          name
        }
      }
    }
  }
`;
