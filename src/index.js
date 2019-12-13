"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const Router = require("@koa/router");
const BodyParser = require("koa-bodyparser");
const genres = require("koa-res");
const app = new Koa();
const router = new Router();
const PORT = Number(process.env.PORT) || 3000;
app.use(BodyParser());
app.use(genres());
router.get("/", (ctx, next) => {
    ctx.body = {
        name: "Nelson"
    };
});
app.use(router.routes());
app.listen(PORT, "0.0.0.0", null, () => console.log(`Server Running at ${PORT}`));
//# sourceMappingURL=index.js.map