import { gql } from '@apollo/client';

export const QUERY_GET_FILTERED_SONGS = gql`
  query getFilteredSongs($artists: [String], $genres: [String], $tags: [String]) {
    getFilteredSongs(artists: $artists, genres: $genres, tags: $tags) {
      _id
      artist
      genre
      name
      tag
    }
  }
`;