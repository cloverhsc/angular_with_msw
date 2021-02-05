import { User1, User2 } from './mockdata';
import { rest } from 'msw';

export const handlers = [
  rest.post('/login', null),

  rest.get('/user', (req, res, ctx) => {
    // find out the payload parameter.
    const id = parseInt(req.url.searchParams.get('id'), 10);

    if (id === 1) {
      return res(ctx.status(200), ctx.delay(3000), ctx.json(User1));
    } else if (id === 2) {
      return res(ctx.status(200), ctx.json(User2));
    } else {
      return res(
        ctx.status(401),
        ctx.json({ resul: 'failed', reason: 'Can not find the user.' })
      );
    }
  }),
];
