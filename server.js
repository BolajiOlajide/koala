'use strict';

const Koa = require('koa');
const KoaRouter = require('koa-router');


const app = new Koa();
const router = new KoaRouter();

router.get('koala', '/', (ctx) => {
  ctx.body = 'Welcome! To the Koala Book of Everything!';
});

// app.use(function *() {
//   this.body = 'Hello world!!!';
// });

app.use(router.routes())
  .use(router.allowedMethods());

app.listen(1234, () => console.log('Koa server started on port 1234'));
