import { gql } from '@apollo/client';

export const MUTATION_DELETE_SONG = gql`
  mutation deleteSong(
    $id: ID!
  ) {
    deleteSong(id: $id)
  }
`;
