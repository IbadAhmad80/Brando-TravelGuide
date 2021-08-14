import { GraphQLServer, PubSub } from "graphql-yoga";

import Query from "./resolvers/Query";
import mongoose from "mongoose";

const pubsub = new PubSub();

const server = new GraphQLServer({
  typeDefs: "./src/graphql-basics/schema.graphql",
  resolvers: {
    Query,
  },
  context: {
    pubsub,
  },
});

server.start(() => {
  console.log("The server is up!");
});

//Connecting to the database
mongoose.connect(
  "mongodb+srv://ibad:flourida123@cluster0.02mci.mongodb.net/brando-travelguide?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Up and running with mongoDB");
  }
);
