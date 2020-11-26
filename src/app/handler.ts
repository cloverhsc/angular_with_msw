import { rest } from 'msw';

export const handlers = [
  rest.post('/login', null),
  rest.get('/user', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ name: 'clover' }));
  }),
];
