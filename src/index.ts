import { ApolloServer } from "apollo-server";

const port = process.env.SERVER_PORT || 3000;

import dotenv from 'dotenv';

dotenv.config();

import { schema } from "./schema";
export const server = new ApolloServer({
  schema,
});

server.listen({ port });
