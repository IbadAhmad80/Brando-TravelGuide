import { GraphQLServer, PubSub } from "graphql-yoga";
import Blogs from "./src/graphql-basics/resolvers/Blogs";
import Comments from "./src/graphql-basics/resolvers/Comments";
import Query from "./src/graphql-basics/resolvers/Query";
import Mutation from "./src/graphql-basics/resolvers/Mutation";
import Subscription from "./src/graphql-basics/resolvers/Subscription";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const pubsub = new PubSub();

const server = new GraphQLServer({
  typeDefs: "./src/graphql-basics/schema.graphql",
  resolvers: {
    Query,
    Mutation,
    Subscription,
    Comments,
    Blogs,
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
  process.env.MONGODB_URI ||
    "mongodb+srv://ibad:flourida123@cluster0.02mci.mongodb.net/brando-travelguide?retryWrites=true&w=majority",
  { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true },
  () => {
    console.log("Up and running with mongoDB");
  }
);
