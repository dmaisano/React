import {
  Arg,
  ClassType,
  Mutation,
  Resolver,
  UseMiddleware,
  InputType,
  Field,
} from "type-graphql";
import { RegisterInput } from "./register/RegisterInput";
import { User } from "../../entity/User";
import { Product } from "../../entity/Product";
import { Middleware } from "type-graphql/dist/interfaces/Middleware";

function createResolver<T extends ClassType, K extends ClassType>(
  suffix: string,
  returnType: T,
  inputType: K,
  entity: any,
  middleware?: Middleware<any>[],
) {
  @Resolver()
  abstract class BaseResolver {
    @Mutation(() => returnType, { name: `create${suffix}` })
    @UseMiddleware(...(middleware || []))
    async create(@Arg("data", () => inputType) data: any) {
      return entity.create(data).save();
    }
  }

  return BaseResolver;
}

@InputType()
class ProductInput {
  @Field()
  name: string;
}

export const BaseCreateUser = createResolver("User", User, RegisterInput, User);

export const BaseCreateProduct = createResolver(
  "Product",
  Product,
  ProductInput,
  Product,
);

// @Resolver()
// export class CreateUserResolver extends BaseCreateUser {}

// @Resolver()
// export class CreateProductResolver extends BaseCreateProduct {}
