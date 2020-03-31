import { Connection } from "typeorm";
import { testConn } from "../../../test-utils/testConn";
import { gCall } from "../../../test-utils/gClass";
import { RegisterInput } from "./RegisterInput";

let conn: Connection;

beforeAll(async () => {
  conn = await testConn();
});

afterAll(async () => {
  await conn.close();
});

const registerMutation = `
mutation Register($data: RegisterInput!) {
  register(data: $data) {
    id
    firstName
    lastName
    email
    name
  }
}

`;

describe("Register", () => {
  it("create user", async () => {
    const data: RegisterInput = {
      firstName: "joe",
      lastName: "shmoe",
      email: "joe30330@gmail.com",
      password: "joe123",
    };

    console.log(
      await gCall({
        source: registerMutation,
        variableValues: {
          data,
        },
      }),
    );
  });
});
