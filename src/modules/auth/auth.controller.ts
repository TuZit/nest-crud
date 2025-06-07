import { UsersService } from './../users/users.service';
import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Users } from 'src/entity/users.entities';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService
  ) {
    console.log('AuthController initialized');
  }

  @Post('/register')
  register(@Body() userData: Partial<Users>) {
    console.log('auth');
    return this.usersService.createUser(userData);
  }
}
