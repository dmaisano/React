import bcrypt from 'bcryptjs';
import { Arg, Mutation, Resolver } from 'type-graphql';

import { User } from '../../entity/User';
import { redis } from '../../redis';
import { forgotPasswordPrefix } from '../contants/redisPrefixes';
import { ChangePasswordInput } from './changePassword/ChangePasswordInput';

@Resolver()
export class ChangePasswordResolver {
  @Mutation(() => User, { nullable: true })
  async changePassword(
    @Arg('data') { token, password }: ChangePasswordInput,
  ): Promise<User | null> {
    token = forgotPasswordPrefix + token;

    const userId = await redis.get(token);

    if (!userId) {
      return null;
    }

    const user = await User.findOne(userId);

    if (!user) return null;

    await redis.del(token);

    user.password = await bcrypt.hash(password, 12);

    user.save();

    return user;
  }
}
