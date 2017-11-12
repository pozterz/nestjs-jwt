import { Module } from '@nestjs/common'
import { DatabaseModule } from './database.module'
import { UserController } from '../controllers/user.controller'
import { UserProviders } from '../providers/user.providers'
import { UserService } from '../services/user.service'

@Module({
  modules: [DatabaseModule],
  controllers: [UserController],
  components: [
    ...UserProviders,
    UserService,
  ],
})

export class UserModule {}