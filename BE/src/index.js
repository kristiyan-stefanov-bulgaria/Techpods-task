import 'dotenv/config';
import { ApolloServer } from 'apollo-server';
import mongoose from 'mongoose';
import { typeDefs } from './typeDefs'
import { resolvers } from './resolvers'
import { Song as SongModel } from './models/song';
import Songs from './dataSources/songs';

const uri = process.env.MONGODB_URI
const mongoConnect = async () => {
  await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
};

mongoConnect()
  .then(console.log('Connected to database successfully'))
  .catch(error => console.error(error));

const dataSources = () => ({
  songs: new Songs(SongModel),
});

const server = new ApolloServer({typeDefs, resolvers, dataSources})

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});