const Koa = require('koa');
const Router = require('koa-router');
const koaBody = require('koa-body');
const cookie = require('cookie');
const next = require('next');

const { MongoClient } = require('mongodb');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const recordGetAction = require('./controllers/record-get');
const recordPatchAction = require('./controllers/record-patch');

const { COOKIE_KEY } = require('../constants/common');

(async () => {
  await app.prepare();
  const mongoClient = await MongoClient.connect('mongodb://localhost');

  const server = new Koa();
  const router = new Router();

  server.use(koaBody());
  server.use(async (ctx, next) => {
    ctx.db = mongoClient.db('medical-history');
    await next();
  });

  router.get('/api/v1/record', recordGetAction);
  router.patch('/api/v1/record', recordPatchAction);

  router.get('/', async ctx => {
    const key = cookie.parse(ctx.req.headers.cookie || '')[COOKIE_KEY];
    let answers;
    if (key) {
      const collection = ctx.db.collection('record');
      const record = await collection.findOne({ key });
      answers = record.questionnaire;
    }
    await app.render(ctx.req, ctx.res, '/main', { ...ctx.query, answers });
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
})();
