import { gql } from "@apollo/client";

export const getPackages = gql`
  query {
    packages {
      title
      detail
      description
      category
      image
      id
    }
  }
`;

export const getBlogs = gql`
  query blogs(
    $title: String
    $tag: String
    $date: Boolean
    $views: Boolean
    $category: String
    $default: Boolean
    $month: String
  ) {
    blogs(
      data: {
        title: $title
        tag: $tag
        date: $date
        views: $views
        category: $category
        default: $default
        month: $month
      }
    ) {
      id
      title
      image
      category
      tags
      date
      views
      comments {
        id
      }
    }
  }
`;

export const getComments = gql`
  query comments($blogID: ID!) {
    getComments(blogID: $blogID) {
      comments {
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
  }
`;
