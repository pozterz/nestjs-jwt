import { createConnection } from 'typeorm'
import { Constant } from '../config/constant'

export const db = [
  {
    provide: Constant.databaseRepo,
    useFactory: async () => await createConnection({
      type: 'mysql',
      host: 'localhost',
      username: 'root',
      password: '',
      database: 'nest-api',
      entities: [
          __dirname + '/../**/*.model{.ts,.js}',
      ],
      synchronize: true
    })
  }
]