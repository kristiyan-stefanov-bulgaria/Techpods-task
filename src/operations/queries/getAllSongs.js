import { gql } from '@apollo/client';

export const QUERY_GET_ALL_SONGS = gql`
  query getAllSongs {
    getSongs {
      _id
      artist
      genre
      name
      tag
    }
  }
`;