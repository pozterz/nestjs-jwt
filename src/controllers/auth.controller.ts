import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common'
import { AuthService } from '../services/auth.service'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService){ }

  @Post()
  async authenticate(@Body() req, @Res() res) {
    const token = await this.authService.auth(req)
   if(token){
     res.status(HttpStatus.OK).json(token)
   } else {
     res.status(HttpStatus.UNAUTHORIZED).json('Invalid username or password')
   }
  }
}