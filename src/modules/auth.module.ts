import * as passport from 'passport'
import {
  Module,
  NestModule,
  MiddlewaresConsumer,
  RequestMethod
} from '@nestjs/common'
import { AuthService } from '../services/auth.service'
import { JwtStrategy } from '../strategies/jwt.strategy'
import { DatabaseModule } from './database.module'
import { AuthProviders } from '../providers/auth.providers'
import { AuthController } from '../controllers/auth.controller'
import { EncryptService } from '../services/encrypt.service'

@Module({
  modules: [DatabaseModule],
  controllers: [AuthController],
  components: [...AuthProviders, AuthService, JwtStrategy, EncryptService],
})

export class AuthModule implements NestModule {
  public configure(consumer: MiddlewaresConsumer) {
    consumer
      .apply(passport.authenticate('jwt', { session: false }))
      .forRoutes({ path: '/auth/authorized', method: RequestMethod.ALL})
  }
}