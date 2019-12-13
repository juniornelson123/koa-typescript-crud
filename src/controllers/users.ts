import { Context } from 'koa'
import { User } from '../entity/User'
import { getManager, Repository } from 'typeorm'

export default {
  index: async (ctx: Context) => {
    const users: Array<User> = await getManager().find(User)
    ctx.body = users
  },
  show: async (ctx: Context) => {
    const user: User = await getManager().findOneOrFail(User, ctx.params.id)
    ctx.body = user
  },
  create: async (ctx: Context) => {
    const userRepository: Repository<User> = await getManager().getRepository(User)

    const newUser = await userRepository.create(ctx.request.body)

    await userRepository.save(newUser)
    
    ctx.body = newUser
  },
  update: async (ctx: Context) => {
    const userRepository: Repository<User> = await getManager().getRepository(User)

    const user = await userRepository.update(ctx.params.id, ctx.request.body)

    ctx.body = user
  },
  destroy: async (ctx: Context) => {
    const userRepository: Repository<User> = await getManager().getRepository(User)

    const user = await userRepository.delete(ctx.params.id)

    ctx.body = user
  }
}