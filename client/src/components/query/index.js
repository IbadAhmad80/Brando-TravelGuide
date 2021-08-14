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
