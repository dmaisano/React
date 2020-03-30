import { ConnectionOptions } from "typeorm";

export const typeOrmConfig: ConnectionOptions = {
  type: "mysql",
  host: "",
  port: 0,
  username: "",
  password: "",
  database: "",
  synchronize: true,
  logging: true,
  dropSchema: false,
};
