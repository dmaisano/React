import { buildSchema } from "type-graphql";
import { GraphQLSchema } from "graphql";

export const createSchema = () =>
  buildSchema({
    resolvers: [__dirname + "/../modules/**/*.resolver.ts"],
  });
