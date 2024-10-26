import { Controller, Body, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { User } from 'src/user.entity';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/register')
  registerUser(@Body() user: User, @Res() resp: Response) {
    return this.authService.registerUser(user, resp);
  }

  @Post('/login')
  loginUser(@Body() user: User, @Res() resp: Response) {
    return this.authService.loginUser(user, resp);
  }

  @Get('/user')
  authUser(@Req() req: Request, @Res() resp: Response) {
    return this.authService.authUser(req, resp);
  }

  @Post('/refresh')
  refreshUser(@Req() req: Request, @Res() resp: Response) {
    return this.authService.refreshUser(req, resp);
  }

  @Get('/logout')
  logoutUser(@Req() req: Request, @Res() resp: Response) {
    return this.authService.logoutUser(req, resp);
  }
}
