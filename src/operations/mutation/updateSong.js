import { gql } from '@apollo/client';

export const MUTATION_UPDATE_SONG = gql`
  mutation updateSong(
    $updateSongId: ID!
    $name: String!
    $artist: String!
    $genre: String!
    $tag: [String]
  ) {
    updateSong(id: $updateSongId, name: $name, artist: $artist, genre: $genre, tag: $tag) {
      _id
      artist
      genre
      name
      tag
    }
  }
`;
