import { createConnection, Connection } from "typeorm";

import { typeOrmTestConfig } from "../ormconfig";

export const testConn = (drop: boolean = false): Promise<Connection> => {
  return createConnection({
    ...typeOrmTestConfig,
    entities: [`${__dirname}/../entity/**/*.{js,ts}`],
    synchronize: drop,
    dropSchema: drop,
  });
};
