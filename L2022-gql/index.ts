// import express, { Express, Request, Response } from "express";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { connectDb } from "./config/db.js";
import { typeDefs } from "./gql/typeDefs.js";
import { resolvers } from "./gql/resolvers.js";

connectDb();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`${url}`);
