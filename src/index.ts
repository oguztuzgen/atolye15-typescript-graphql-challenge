import { ApolloServer } from "apollo-server";

import { posts } from "./data/data";

const port = process.env.SERVER_PORT || 3000;

import { schema } from "./schema";
export const server = new ApolloServer({
  schema,
});

server.listen({ port });
