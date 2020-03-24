import { Arg, Mutation, Resolver } from 'type-graphql';
import { v4 } from 'uuid';

import { User } from '../../entity/User';
import { redis } from '../../redis';
import { sendEmail } from '../../utils/sendEmail';
import { forgotPasswordPrefix } from '../contants/redisPrefixes';

@Resolver()
export class ForgotPasswordResolver {
  @Mutation(() => Boolean)
  async forgotPassword(@Arg('email') email: string): Promise<boolean> {
    const user = await User.findOne({ where: { email } });

    if (!user) return true;

    let token = v4();
    token = forgotPasswordPrefix + token;
    await redis.set(token, user.id, 'ex', 60 * 60 * 24); // 1 day expiration

    await sendEmail(email, `http://localhost:3000/user/change-password/${token}`);

    return true;
  }
}
