import { MiddlewareFn } from 'type-graphql';

import { MyContext } from '../../types/MyContext';

export const isAuth: MiddlewareFn<MyContext> = async ({ context }, next) => {
  console.log('I RAN');

  if (!context.req.session!.userId) {
    console.log('not auth');
    throw new Error('not authenticated');
  }

  return next();
};
