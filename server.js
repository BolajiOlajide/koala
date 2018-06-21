'use strict';

const path = require('path');

const Koa = require('koa');
const KoaRouter = require('koa-router');
const render = require('koa-ejs');


const app = new Koa();
const router = new KoaRouter();

render(app, {
  root: path.join(__dirname, 'views'),
  layout: 'layout',
  viewExt: 'html',
  cache: false,
  debug: true
})

router.get('koala', '/', (ctx) => {
  ctx.body = 'Welcome! To the Koala Book of Everything!';
});

router.get('koala', '/koa', (ctx) => {
  let koala_attributes = [];

  koala_attributes.push({
    meta_name: 'Color',
    meta_value: 'Black and white'
  });

  koala_attributes.push({
    meta_name: 'Native Country',
    meta_value: 'Australia'
  });

  koala_attributes.push({
    meta_name: 'Animal Classification',
    meta_value: 'Mammal'
  });

  koala_attributes.push({
    meta_name: 'Life Span',
    meta_value: '13 - 18 years'
  });

  koala_attributes.push({
    meta_name: 'Are they bears?',
    meta_value: 'no!'
  });

  return ctx.render('index', {
    attributes: koala_attributes
  });
});

// app.use(function *() {
//   this.body = 'Hello world!!!';
// });

app.use(router.routes())
  .use(router.allowedMethods());

app.listen(1234, () => console.log('Koa server started on port 1234'));
