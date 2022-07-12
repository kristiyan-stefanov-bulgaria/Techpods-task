export const resolvers = {
  Query: {
    getSongs: async (_, _args, { dataSources: { songs } }) => {
      return songs.getSongs();
    },
    getSong: async (_, { id }, { dataSources: { songs } }) => {
      return songs.getSong(id);
    },
    getFilteredSongs: async (_, _args, { dataSources: { songs } }) => {
      return songs.getFilteredSongs(_args);
    }
  },
  Mutation: {
    createSong: async (_, args, { dataSources: { songs } }) => {
      return songs.createSong(args);
    },
    updateSong: async (_, args, { dataSources: { songs  } }) => {
      return songs.updateSong(args);
    },
    deleteSong: async (_, args, { dataSources: { songs } }) => {
      return songs.deleteSong(args);
    },
  }
};
