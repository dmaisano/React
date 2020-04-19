import { ConnectionOptions } from "typeorm";

export const typeOrmConfig: ConnectionOptions = {
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "",
  database: "typegraphql-tutorial",
  synchronize: true,
  logging: true,
  dropSchema: false,
};

export const typeOrmTestConfig: ConnectionOptions = {
  type: "postgres",
  host: "",
  port: 0,
  username: "postgres",
  password: "",
  database: "typegraphql-tutorial-test",
  synchronize: true,
  logging: true,
};
