import { Component, Inject, forwardRef } from '@nestjs/common'
import * as jwt from 'jsonwebtoken'
import { Repository } from 'typeorm'
import { User } from '../models/user.model'
import { Config } from '../config/config'
import { Constant } from '../config/constant'
import { EncryptService } from '../services/encrypt.service'

@Component()
export class AuthService {
  constructor(
    @Inject(Constant.authRepo) private readonly user: Repository<User>,
    private readonly encrypt: EncryptService
  ){}

  async createToken(username) {
    const expiresIn = 60 * 60, secretKey = Config.key
    const user = { username: username }
    const token = jwt.sign(user, secretKey, { expiresIn })
    return {
      expires_in: expiresIn,
      access_token: token
    }
  }

  async auth(req) {
    const user = await this.user.findOne({ username: req.username})
    if(user) {
      if(await this.encrypt.compare(req.password, user.password)){
        return await this.createToken(req.username)
      }
    } else {
      return false
    }
  }

  async validateUser(signed): Promise<boolean> {
    // later
    return true
  }
}