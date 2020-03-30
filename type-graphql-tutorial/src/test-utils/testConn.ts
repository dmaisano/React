import { createConnection, Connection } from "typeorm";
import { typeOrmConfig } from "../ormconfig.test";

export const testConn = (): Promise<Connection> => {
  return createConnection({
    ...typeOrmConfig,
    entities: ["./src/entity/**/*.{js,ts}"],
  });
};
