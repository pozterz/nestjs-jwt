import { Component, Inject } from '@nestjs/common'
import { Repository } from 'typeorm'
import { Constant } from '../config/constant'
import { User } from '../models/user.model'

@Component()
export class UserService {
  constructor(
    @Inject(Constant.userRepo) private readonly user: Repository<User>
  ){}

  async findAll(): Promise<User[]> {
    return await this.user.find()
  }
}