const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const router = require("./router");
const json = require("koa-json");

const PORT = 8080;

const app = new Koa();

app.use(json());
app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
