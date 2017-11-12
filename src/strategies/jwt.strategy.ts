import { Component, Inject } from '@nestjs/common'
import * as passport from 'passport'
import { ExtractJwt, Strategy } from 'passport-jwt'
import { AuthService } from '../services/auth.service'
import { Config } from '../config/config'

@Component()
export class JwtStrategy extends Strategy {
  constructor(private readonly authService: AuthService) {
    super(
      {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        passReqToCallback: true,
        secretOrKey: Config.key,
      },
      async (req, payload, next) => await this.verify(req, payload, next)
    )
    passport.use(this)
  }

  public async verify(req, payload, done) {
    const isValid = await this.authService.validateUser(payload)
    if(!isValid) {
      return done('Unauthorizeddd', false)
    }
    done(null, payload)
  }
}