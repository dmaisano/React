import { ApolloServer } from "apollo-server-express";
import connectRedis from "connect-redis";
import cors from "cors";
import Express from "express";
import session from "express-session";
import "reflect-metadata";
import { createConnection } from "typeorm";
import chalk from "chalk";

import { typeOrmConfig } from "./ormconfig";
import { redis } from "./redis";
import { createSchema } from "./utils/createSchema";

const main = async () => {
  const conn = await createConnection({
    ...typeOrmConfig,
    entities: ["./src/entity/**/*.{js,ts}"],
  });

  const apolloServer = new ApolloServer({
    schema: await createSchema(),
    context: ({ req, res }) => ({ req, res }),
  });

  const app = Express();

  const RedisStore = connectRedis(session);

  app.use(
    cors({
      credentials: true,
      origin: "http://localhost:3000",
    }),
  );

  app.use(
    session({
      store: new RedisStore({
        client: redis,
      }),
      name: "qid",
      secret: "super_secret_config", // ideally goes in .env file
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 1000 * 60 * 60 * 24 * 7 * 365, // 7 years
      },
    }),
  );

  apolloServer.applyMiddleware({ app });

  const PORT = 4000;
  app.listen(PORT, () => {
    console.log(`server started on ${chalk.green(`http://localhost:${PORT}/graphql`)}`);
  });
};

main();
