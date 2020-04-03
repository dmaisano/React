import { Arg, Mutation, Resolver, ClassType, InputType } from "type-graphql";

import { User } from "../../entity/User";
import { RegisterInput } from "./register/RegisterInput";

function createBaseResolver<T extends ClassType, K extends ClassType>(
  suffix: string,
  returnType: T,
  inputType: K,
  entity: any,
) {
  @Resolver({ isAbstract: true })
  abstract class BaseResolver {
    @Mutation(() => returnType, { name: `create${suffix}` })
    async create(@Arg("data", () => inputType) data: any) {
      return entity.create(data).save();
    }
  }

  return BaseResolver;
}
