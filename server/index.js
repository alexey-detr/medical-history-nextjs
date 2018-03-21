const Koa = require('koa');
const Router = require('koa-router');
const koaBody = require('koa-body');
const next = require('next');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const recordGetAction = require('./controllers/record-get');
const recordPutAction = require('./controllers/record-put');
const recordPatchAction = require('./controllers/record-patch');

app.prepare().then(() => {
  const server = new Koa();
  const router = new Router();

  server.use(koaBody());

  router.get('/api/v1/record', recordGetAction);
  router.put('/api/v1/record', recordPutAction);
  router.patch('/api/v1/record', recordPatchAction);

  router.get('/', async ctx => {
    await app.render(ctx.req, ctx.res, '/main', ctx.query);
    ctx.respond = false;
  });

  router.get('*', async ctx => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
  });

  server.use(async (ctx, next) => {
    ctx.res.statusCode = 200;
    await next();
  });

  server.use(router.routes());
  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});
