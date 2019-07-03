import koa from 'koa';
// import route from 'koa-route';
import route from './route/route';
import bodyparser from 'koa-bodyparser';

// type Context = koa.ParameterizedContext;

const app: koa = new koa();

app.use(bodyparser());
app.use(route.routes());

app.listen(3001, () => {
    console.log('[demo] route-use-middleware is starting at port 3001')
});