import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Song {
    _id: ID!
    name: String!
    artist: String!
    genre: String!
    tag: [String]
  }

  type Query {
    getSongs: [Song!]!,
    getSong(id: ID!): Song
    getFilteredSongs(artists: [String], genres: [String], tags: [String]): [Song!]
  }

  type Mutation {
    createSong(name: String!, artist: String!, genre: String!, tag: [String]): Song!
    deleteSong(id: ID!): Boolean
    updateSong(id: ID!, name: String!, artist: String!, genre: String!, tag: [String]): Song!
  }
`;
