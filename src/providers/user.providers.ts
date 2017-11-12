import { Connection, Repository } from 'typeorm'
import { User } from '../models/user.model'
import { Constant } from '../config/constant'

export const UserProviders = [
  {
    provide: Constant.userRepo,
    useFactory: (connection: Connection) => connection.getRepository(User),
    inject: [Constant.databaseRepo]
  }
]