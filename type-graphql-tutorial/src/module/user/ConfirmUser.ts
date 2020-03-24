import { Arg, Ctx, Mutation, Resolver } from 'type-graphql';

import { User } from '../../entity/User';
import { redis } from '../../redis';
import { MyContext } from '../../types/MyContext';

@Resolver()
export class ConfirmUserResolver {
  @Mutation(() => Boolean)
  async confirmUser(
    @Arg('token') token: string,
    @Ctx() ctx: MyContext,
  ): Promise<boolean> {
    const userId = await redis.get(token);

    if (!userId) return false;

    await User.update({ id: parseInt(userId, 10) }, { confirmed: true });
    await redis.del(token);

    return true;
  }
}
