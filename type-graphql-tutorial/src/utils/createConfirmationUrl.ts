import { v4 } from 'uuid';

import { redis } from '../redis';
import { confirmUserPrefix } from '../modules/contants/redisPrefixes';

export const createConfirmationUrl = async (userId: number): Promise<string> => {
  let token = v4();
  token = confirmUserPrefix + token;
  await redis.set(token, userId, 'ex', 60 * 60 * 24); // 1 day expiration

  return `http://localhost:3000/user/confirm/${token}`;
};
