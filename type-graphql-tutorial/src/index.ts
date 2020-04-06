import { ApolloServer } from "apollo-server-express";
import chalk from "chalk";
import connectRedis from "connect-redis";
import cors from "cors";
import Express from "express";
import session from "express-session";
import queryComplexity, {
  fieldExtensionsEstimator,
  simpleEstimator,
} from "graphql-query-complexity";
import "reflect-metadata";
import { createConnection } from "typeorm";
import { typeOrmConfig } from "./ormconfig";
import { redis } from "./redis";
import { createSchema } from "./utils/createSchema";

const main = async () => {
  const conn = await createConnection({
    ...typeOrmConfig,
    entities: ["./src/entity/**/*.{js,ts}"],
  });

  const schema = await createSchema();

  const apolloServer = new ApolloServer({
    schema,
    // formatError: formatArgumentValidationError,
    context: ({ req, res }: any) => ({ req, res }),
    validationRules: [
      queryComplexity({
        // The maximum allowed query complexity, queries above this threshold will be rejected
        maximumComplexity: 8,
        // The query variables. This is needed because the variables are not available
        // in the visitor of the graphql-js library
        variables: {},
        // Optional callback function to retrieve the determined query complexity
        // Will be invoked weather the query is rejected or not
        // This can be used for logging or to implement rate limiting
        onComplete: (complexity: number) => {
          console.log("Query Complexity:", complexity);
        },
        estimators: [
          // Using fieldExtensionsEstimator is mandatory to make it work with type-graphql
          fieldExtensionsEstimator(),
          // This will assign each field a complexity of 1 if no other estimator
          // returned a value. We can define the default value for field not explicitly annotated
          simpleEstimator({
            defaultComplexity: 1,
          }),
        ],
      }) as any,
    ],
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
