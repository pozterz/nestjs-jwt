import { Controller, Get, Post, Put, Body } from '@nestjs/common'
import { User } from '../models/user.model'
import { UserService } from '../services/user.service'

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService){}

  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAll()
  }

  @Put()
  
  async put(@Body() test: any): Promise<string> {
    console.log('body', test)
    return 'xD'
  }
}