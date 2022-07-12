import { gql } from '@apollo/client';

export const MUTATION_ADD_SONG = gql`
  mutation createSong(
    $name: String!
    $artist: String!
    $genre: String!
    $tag: [String]
  ) {
    createSong(name: $name, artist: $artist, genre: $genre, tag: $tag) {
      _id
      name
      artist
      genre
      tag
    }
  }
`;
