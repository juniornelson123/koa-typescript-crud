import users from '../controllers/users'

export const UsersRoutes = [
  {
    path: '/users',
    method: 'get',
    action: users.index
  },
  {
    path: '/users/:id',
    method: 'get',
    action: users.show
  },
  {
    path: '/users',
    method: 'post',
    action: users.create
  },
  {
    path: '/users/:id',
    method: 'put',
    action: users.update
  },
  {
    path: '/users/:id',
    method: 'delete',
    action: users.destroy
  },
]