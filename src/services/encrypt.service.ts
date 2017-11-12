import { Component, Inject } from '@nestjs/common'
import * as bcrypt from 'bcrypt'
import { Repository } from 'typeorm'
import { Constant } from '../config/constant'
import { User } from '../models/user.model'

@Component()
export class EncryptService {
  constructor(){}
  
  async encryptPassword(password) {
    const saltRound = Constant.saltRound
    return bcrypt.hash(password, saltRound)
  }

  async compare(password, hash) {
    return bcrypt.compare(password, hash)
  }

}