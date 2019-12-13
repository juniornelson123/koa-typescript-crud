import * as Koa from 'koa'
import * as Router from '@koa/router'
import * as BodyParser from 'koa-bodyparser'
import * as genres from 'koa-res'
import "reflect-metadata"
import { createConnection } from 'typeorm'

import { UsersRoutes } from './routes/users'

const app: Koa = new Koa()
const router: Router = new Router()
const PORT: number = Number(process.env.PORT) || 3000

createConnection().then(async connection => {

  app.use(BodyParser())
  app.use(genres())

  UsersRoutes.forEach(route => router[route.method](route.path, route.action));
  
  app.use(router.routes())
  
  app.listen(PORT, "0.0.0.0", null, () => console.log(`Server Running at ${PORT}`))
}).catch(error => {
  console.log(error)
})