import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { typeDefs } from "./src/schema.js";
import { resolvers } from "./src/resolvers.js";

dotenv.config();

const startServer = async () => {
  const server = new ApolloServer({ typeDefs, resolvers });

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");

    const { url } = await startStandaloneServer(server, {
      listen: { port: 4000 },
      context: async ({ req }) => {
        // Here you can add authentication logic if needed
        return {};
      },
    });

    console.log(`🚀 Server ready at: ${url}`);
  } catch (error) {
    console.error("Failed to start the server:", error);
  }
};

startServer();
